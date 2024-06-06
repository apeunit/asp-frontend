import IconButton from "../IconButton/IconButton"
import { ArrowLeft, Dots } from "../Icons/Icons"
import styles from "./Navigation.module.css"
import { useState } from "react"
import { useAuth } from "@/hooks/auth"
import { useApp } from "@/context/AppContext"
import { Popover } from "react-tiny-popover"
import Menu from "../Menu/Menu"
import { useNavigate } from "react-router-dom"

const Navigation = () => {
  const { user, logout } = useAuth({ middleware: "auth" })
  const { toggleMenu, menuOpen, closeMenu } = useApp()
  const pathname = window.location.pathname
  const navigate = useNavigate()

  // TODO: make less ugly & more robust
  const back = pathname.startsWith("/tour")
    ? () => {
        navigate(-1)
      }
    : null

  return (
    <>
      <header className={styles.container}>
        <div>
          {back && (
            <IconButton onClick={back}>
              <ArrowLeft />
            </IconButton>
          )}
        </div>
        {/* TODO: implement drop down menu */}
        <Popover
          isOpen={menuOpen}
          positions={["bottom"]} // preferred positions by priority
          align="end"
          onClickOutside={closeMenu}
          content={<Menu />}
        >
          <div>
            <IconButton onClick={toggleMenu}>
              <Dots />
            </IconButton>
          </div>
        </Popover>
      </header>
    </>
  )
}

export default Navigation
