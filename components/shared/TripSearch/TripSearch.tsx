import { useState } from "react";
import { Magnifier } from "../Icons/Icons";
import styles from "./TripSearch.module.css";
import classNames from "classnames";

type TripSearch = {
  className?: string;
  onSearchUpdate: (query: string) => void;
};

const TripSearch = (props: TripSearch) => {
  const { className, onSearchUpdate, ...rest } = props;
  const [query, setQuery] = useState("");

  const handleQueryUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={(e) => {
        e.preventDefault();

        onSearchUpdate && onSearchUpdate(query);
      }}
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
