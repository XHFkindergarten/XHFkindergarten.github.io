import classes from "./App.module.less";
//
function App() {
  return (
    <div className={classes.container}>
      <div className={classes["main-container"]}>
        <h1>Hey,</h1>
        <p>I'm 風魔小次郎, a front-end engineer.</p>
        <h4>location</h4>
        <ul>
          <li>Shenzhen, China</li>
        </ul>
        <h4>experience</h4>
        <ul>
          <li>
            <span className={classes.title}>2015-2020</span>
            <a
              href={"https://www.scut.edu.cn/new/"}
              target="_blank"
              className={classes.scut}
            >
              SCUT
            </a>
          </li>
          <li>
            <span className={classes.title}>2020-2021</span>
            <a
              className={classes.jd}
              href={"https://o2team.github.io/"}
              target="_blank"
            >
              JD O2 Team
            </a>
          </li>
          <li>
            <span className={classes.title}>2021-2023</span>
            <a
              className={classes.bd}
              href={"https://www.bytedance.com/"}
              target="_blank"
            >
              ByteDance
            </a>
          </li>
          <li>
            <span className={classes.title}>2023-2025</span>
            <a
              className={classes.we}
              href={"https://pay.weixin.qq.com/"}
              target="_blank"
            >
              WeChat
            </a>
          </li>
          <li>
            <span className={classes.title}>2025-Present</span>
            <a
              className={classes.okx}
              href={"https://www.okx.com/"}
              target="_blank"
            >
              OKX
            </a>
          </li>
        </ul>
        <h4>contact</h4>
        <ul>
          <li>
            <span>email: XHFkindergarten@gmail.com</span>
          </li>
          <li>
            <span>wechat: lzk100511130612</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
