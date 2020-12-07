<div id="titulo">
    <h1>Formulario de ingreso</h1>
</div>
<div id="formulario">
    <form action="procesa_form.php" method="post">
        <div id="personal_data">
            <h2>Datos Personales</h2>
            Nombre:<input type="text" name="nombre" class="texto" required><span class="requirido">*</span><br>
            1er Apellido:<input type="text" name="apellido1" class="texto" required><span class="requirido">*</span><br> 
            2do Apellido:<input type="text" name="apellido2" class="texto"><br>
            DNI / NIE / Pasaporte:<input type="text" name="dni" class="texto" required><span class="requirido">*</span><br>
            Fecha Nacimiento:<input type="date" name="bday" required<span class="requirido">*</span><br>
            Sexo:<span class="requirido">*</span>
            <br>
            <input type="radio" name="sexo" value="Masculino"><label for="opt_sexo_data" required>Masculino</label><br>
            <input type="radio" name="sexo" value="Femenino"><label for="opt_sexo_data">Femenino</label>
            <br>
            Movil:<input type="text" name="tel" class="texto" required><span class="requirido">*</span><br>
            E-mail:<input type="email" name="email" class="texto"><br>
            Observaciones:<br>
            <textarea rows="5" cols="30" name="comment">
            </textarea>
        </div>
        <div id="activities_data">
            <h2>Actividades</h2>
            <span>Seleccione una o varias actividades.</span><span class="requirido">*</span><br>
            <input type="checkbox" name="activities[]" value="0" required><label for="opt_activities_data">Boxeo</label><br>
            <input type="checkbox" name="activities[]" value="1"><label for="opt_activities_data">Thai</label><br>
            <input type="checkbox" name="activities[]" value="2"><label for="opt_activities_data">Yoga</label><br>
            <input type="checkbox" name="activities[]" value="3"><label for="opt_activities_data">Máquinas</label><br>
            <input type="checkbox" name="activities[]" value="4"><label for="opt_activities_data">TRX</label><br>
            <input type="checkbox" name="activities[]" value="5"><label for="opt_activities_data">Spinning</label><br>
            <input type="checkbox" name="activities[]" value="6"><label for="opt_activities_data">Crossfit</label><br>
            <input type="checkbox" name="activities[]" value="7"><label for="opt_activities_data">Natación</label><br>
            <br>
            <div class="info">
                <span>*Cada actividad cuesta 20€ (precio incluye monitor de actividad).</span>
            </div>
        </div>
        <div id="days_data">
            <h2>Días</h2>
            <span>Seleccione días semanales.</span><span class="requirido">*</span><br>
            <input type="radio" name="days" value="0" required><label for="opt_days_data">1 día/semana</label><br>
            <input type="radio" name="days" value="1"><label for="opt_days_data">3 días/semana</label><br>
            <input type="radio" name="days" value="2"><label for="opt_days_data">5 días/semana</label><br>
            <input type="radio" name="days" value="3"><label for="opt_days_data">7 días/semana</label><br>
            <br>
            <div class="info">
                <span>* 1 día/semana suma 0€ a la cuota.</span><br>
                <span>* 2 días/semana suma 1€ a la cuota.</span><br>
                <span>* 5 días/semana suma 3€ a la cuota.</span><br>
                <span>* 7 días/semana suma 5€ a la cuota.</span><br>
            </div>
        </div>
        <div id="extras_data">
            <h2>Extras</h2>
            <input type="checkbox" name="extras[]" value="0"><label for="opt_extras_data">SPA</label><br>
            <input type="checkbox" name="extras[]" value="1"><label for="opt_extras_data">Parking</label><br>
            <input type="checkbox" name="extras[]" value="2"><label for="opt_extras_data">Toallas</label><br>
            <br>
            <div class="info">
                <span>*Cada extra sumará 2€ a la cuota.</span>
            </div>
        </div>
        <div id="centros_data">
            <h2>Centros</h2>
            Centro:<span class="requirido">*</span><br>
            <select name="centros_select" class="select" required>
                <option selected value="-1">Seleccione un centro..</option>
                <option value="0">Calvià</option>
                <option value="1">Inca</option>
                <option value="2">Manacor</option>
                <option value="3">Palma</option>
            </select>
        </div>
        <div id="suscription_data">
            <h2>Suscripción</h2>
            <span>Seleccione tipo suscripción.</span><span class="requirido">*</span><br>
            <input type="radio" name="suscription" value="0" required><label for="opt_suscription_data">Mensual</label><br>
            <input type="radio" name="suscription" value="1"><label for="opt_suscription_data">Trimestral</label><br>
            <input type="radio" name="suscription" value="2"><label for="opt_suscription_data">Semestral</label><br>
            <input type="radio" name="suscription" value="3"><label for="opt_suscription_data">Anual</label><br>
            <br>
            <div class="info">
                <span>* Suscripción trimestral 1% descuento.</span><br>
                <span>* Suscripción semestral 4% descuento.</span><br>
                <span>* Suscripción anual 10% descuento.</span><br>
            </div>
        </div>
        <div id="info_data">
            <h2>Otros Servicios</h2>
            <ul>
                <li>Restaurante</li>
                <li>Peluquería</li>
                <li>Nutricionista</li>
            </ul>

            <h2>Próximamente</h2>
            <ul>
                <li>Pistas de Pádel</li>
            </ul>
        </div>
        <br><br>
        <div id="botonera">
            <input type="submit" name="submit" value="Registrar" class="button">
            <input type="reset" name="reset" value="Reset" class="button">
        </div>
    </form>
</div>
