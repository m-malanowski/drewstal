import React from "react"
import { Link } from "gatsby"
import { motion} from 'framer-motion'
import headerStyles from "./Header.module.scss"

const NavLink = props => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
          return {
            style: {
              // color: isCurrent ? "#ffffff" : "#999999",
              borderBottom: isCurrent ? "2px solid white" : "none"
        }
          };
        }}
    />
);

export default () => (
    <header>
      <motion.div
          className={headerStyles.headerInner}
          initial={{opacity: 0, x: -10}}
          animate={{
              opacity: 1,
              x: 0,
              transition: {delay: 2.0, duration: 1},
          }}
          >
        <div className={headerStyles.logo}><a href="/">DREWSTAL.</a></div>
        <nav>
          {/*<AnimatePresence initial={false} exitBeforeEnter >*/}
          <ul className="global-nav">
            <li>
              <NavLink className={headerStyles.link} to="/"><span data-content="Główna">Główna</span></NavLink>
            </li>
            <li>
              {/*<NavLink to="/o-nas">O nas</NavLink>*/}
                <NavLink className={headerStyles.link} to="/o-nas"><span data-content="O nas">O nas</span></NavLink>
            </li>
            <li>
                <NavLink className={headerStyles.link} to="/projekty"><span data-content="Projekty">Projekty</span></NavLink>
            </li>
            <li>
                <p className={`${headerStyles.link} ${headerStyles.notAllowed}`} to=""><span data-content="Realizacje">Realizacje</span></p>
            </li>
          </ul>
          {/*</AnimatePresence>*/}
        </nav>
        <nav>
            <ul>
                <li>
                    <NavLink className={headerStyles.link} to="/kontakt"><span data-content="Kontakt">Kontakt</span></NavLink>
                </li>
            </ul>
        </nav>
      </motion.div>

    </header>
)
