// STYLE
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
          <ul>
              <li>
                  <a href="facebook.com" target="_blank">
                      <img src="/resources/images/fb.png" alt="" />
                  </a>
              </li>
              <li>
                  <a href="twitter.com" target="_blank">
                      <img src="/resources/images/tw.png" alt="" />
                  </a>
              </li>
              <li>
                  <a href="instagram.com" target="_blank">
                      <img src="/resources/images/ig.png" alt="" />
                  </a>
              </li>
          </ul>
      </section>
      <section>
          <img src="/resources/images/logo.png" alt="" />
      </section>
      <section>
          <p>
            Developed by Kaike Oliveira.
          </p>
      </section>
    </footer>)
}