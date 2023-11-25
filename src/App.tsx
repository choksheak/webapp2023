import { useEffect, useState } from "react";
import styles from "./App.module.css";
import viteLogo from "./assets/vite.svg";
import { IS_DEV } from "./shared/tiny-utils";

export function App() {
  // Test to make sure eslint works in your VS Code.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (() => void 0) as any;

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = IS_DEV ? "Dev Webapp" : "Webapp";
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          {/* Illustrating how to use local svg files */}
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className={styles.logo + " " + styles.react}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
      <p className={styles.envWrapper}>
        <span className={styles.env}>
          {/* Env vars can be added by specifying with the "VITE_" prefix */}
          import.meta.env = {JSON.stringify(import.meta.env, null, 2)}
        </span>
        <br />
        <span className={styles.env}>
          process.env = {JSON.stringify(process.env, null, 2)}
        </span>
      </p>
    </div>
  );
}
