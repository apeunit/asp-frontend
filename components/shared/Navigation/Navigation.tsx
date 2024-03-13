import { usePathname, useRouter } from "next/navigation";
import IconButton from "../IconButton/IconButton";
import { ArrowLeft, Dots } from "../Icons/Icons";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  // TODO: make less ugly & more robust
  const back = pathname.startsWith("/tour")
    ? () => {
        router.push("/dashboard");
      }
    : null;

  return (
    <header className={styles.container}>
      <div>
        {back && (
          <IconButton onClick={back}>
            <ArrowLeft />
          </IconButton>
        )}
      </div>
      {/* TODO: implement drop down menu */}
      <IconButton onClick={() => null}>
        <Dots />
      </IconButton>
    </header>
  );
};

export default Navigation;
