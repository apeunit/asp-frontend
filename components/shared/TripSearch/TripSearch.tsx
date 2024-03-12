import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Magnifier } from "../Icons/Icons";
import styles from "./TripSearch.module.css";
import classNames from "classnames";

type TripSearch = {
  className?: string;
  onSearchUpdate: (query: string) => void;
};

const TripSearch = (props: TripSearch) => {
  const { className, onSearchUpdate, ...rest } = props;

  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search"));

  const handleQueryUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("search", query);

    window.history.pushState(null, "", "?" + updatedSearchParams.toString());

    onSearchUpdate && onSearchUpdate(query);
  };

  useEffect(() => {
    if (searchParams.get("search")) {
      onSearchUpdate && onSearchUpdate(query);
    }
  }, []);

  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={handleSubmit}
      {...rest}
    >
      <Magnifier className={styles.icon} />
      <input
        type="text"
        value={query}
        onChange={handleQueryUpdate}
        placeholder="Flugnummer suchen"
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default TripSearch;
