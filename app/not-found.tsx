import styles from "@/app/Notfound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.message}>페이지를 찾을 수 없습니다.</p>
        <p className={styles.description}>
          요청하신 페이지가 존재하지 않거나 사용할 수 없습니다.
          <br />
          주소가 정확한지 다시 한번 확인해 주세요.
        </p>
        <a href="/" className={styles.homeLink}>
          홈으로 이동
        </a>
      </div>
    </div>
  );
}
