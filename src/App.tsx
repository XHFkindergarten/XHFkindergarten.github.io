import classes from "./App.module.less";
//
function App() {
  return (
    <div className={classes.container}>
      <div className={classes["banner-container"]}>
        <img
          src={
            "https://img14.360buyimg.com/ling/jfs/t1/155357/17/16559/98021/600d2335E6829b9cc/210becd64a408d24.jpg"
          }
          className={classes.banner}
        />
      </div>
      <div className={classes["main-container"]}>
        <h1>Hey,</h1>
        <p>
          My name is gvgvli (李肇康), a front-end development engineer living in
          Shenzhen
        </p>
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
              JS O2 team
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
            <span className={classes.title}>2023-now</span>
            <a
              className={classes.we}
              href={"https://pay.weixin.qq.com/"}
              target="_blank"
            >
              Wechat
            </a>
          </li>
        </ul>
        <h4>contact</h4>
        <ul>
          <li>
            <span>Mail: XHFkindergarten@gmail.com</span>
          </li>
          <li>
            <span>Wechat: lzk100511130612</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
