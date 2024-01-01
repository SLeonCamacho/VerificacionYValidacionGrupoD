from selenium import webdriver
from selenium.webdriver.common.alert import Alert

driver = webdriver.Firefox()
driver.get("https://sleoncamacho.github.io/VerificacionYValidacionGrupoD/Selenium/index.html")

# Suponiendo que hay un botón que al hacer clic muestra una alerta
boton = driver.find_element_by_id("botonAlerta")
boton.click()

# Cambiar al alert y aceptarlo
alert = Alert(driver)
alert.accept()

driver.quit()
