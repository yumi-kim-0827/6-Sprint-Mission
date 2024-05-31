import style from "./Container.module.scss";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={style.main_container}>{children}</div>;
}
