from selenium import webdriver

driver = webdriver.Firefox()
driver.get("https://www.google.com")

# Abrir una nueva pestaña
driver.execute_script("window.open('');")

# Cambiar a la nueva pestaña y abrir una nueva página
driver.switch_to.window(driver.window_handles[1])
driver.get("https://github.com")

# Volver a la pestaña original
driver.switch_to.window(driver.window_handles[0])

driver.quit()