from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert

driver = webdriver.Firefox()
driver.get("file:///ruta/a/tu/pagina_prueba.html")  # Asegúrate de usar la ruta correcta a tu archivo HTML

# Localizar el botón por su ID
boton = driver.find_element(By.ID, "botonAlerta")
boton.click()

# Cambiar al alert y aceptarlo
alert = Alert(driver)
alert.accept()

driver.quit()
