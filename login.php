<?php
$username = $_POST["username"];
$password = $_POST["password"];

if ($username === "profesor") {
    if ($password === "1234") {
        echo "Inicio de sesión";
    } else {
        echo '<script>
            alert("Contraseña incorrecta");
            window.location.href = "index.html";
        </script>';
    }
} else {
    echo '<script>
    alert("Usuario no existe");
    window.location.href = "index.html";
</script>';
}
