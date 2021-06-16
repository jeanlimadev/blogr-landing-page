import S from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={S.container}>
      <header className={S.header}>
        <div className={S.wrapper}>
          <nav className={S.nav}>
            <img src="/assets/logo.svg" alt="logo" className={S.logo} />
            <ul>
              <li>
                <a href="#">
                  Product
                  <img src="/assets/icon-arrow-light.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  Company
                  <img src="/assets/icon-arrow-light.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  Connect
                  <img src="/assets/icon-arrow-light.svg" />
                </a>
              </li>
            </ul>
          </nav>
          <div className={S.buttons}>
            <Link className={S.link} href="#"><a>Login</a></Link>
            <button className={S.button}>Sign Up</button>
          </div>
        </div>
        <div className={S.texts}>
          <h1>A modern publishing plataform</h1>
          <h4>Grow your audience and build your online brand</h4>
          <div className={S.buttons}>
            <div className={S.button}>Start for free</div>
            <div className={S.button}>Learn more</div>
          </div>
        </div>
      </header>

      <section className={S.firstSection}>
        <h1>Designed for the future</h1>
        <div className={S.description}>
          <div className={S.texts}>
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility whith plugins and themes provide easy ways to add funcionality or change the looks of a blog.
            </p>

            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. Witht this funcionality, you're in full control.
            </p>
          </div>
          <img src="/assets/illustration-editor-desktop.svg" />
        </div>
      </section>
    </div>
  )
}

export default Home
