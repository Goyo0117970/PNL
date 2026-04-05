/******************************
 * SISTEMA DE TEST PNL
 ******************************/

// =============================
//       PREGUNTAS POR NIVEL
// =============================
const questionsByLevel = {
  1: [
    {
      q: "Niño está corriendo dentro de la casa.",
      options: [
        "No corras dentro de la casa",
        "Te he dicho que no corras.",
        "Camina"
      ],
      correct: 2
    },
    {
      q: "Niña comiendo Espaguetti.",
      options: [
        "No te manches el vestido",
        "Acércate el plato",
        "Come con cuidado para que no te manches"
      ],
      correct: 1
    },
    {
      q: "Dejan la cocina sucia.",
      options: [
        "No dejes la cocina así sucia",
        "Al terminar de comer ordena y limpia la mesa.",
        "Nadie limpia nunca aquí."
      ],
      correct: 1
    },
    {
      q: "Un niño dibuja en las paredes.",
      options: [
        "¡No dibujes en las paredes!",
        "Te he dicho mil veces que no pintes ahí.",
        "Por favor, dibuja en el papel o en tu cuaderno."
      ],
      correct: 2
    },
    {
      q: "Alguien usa el celular en una cena familiar.",
      options: [
        "¡No uses el celular en la mesa!",
        "Guarda el celular mientras comemos.",
        "Siempre estás con el teléfono"
      ],
      correct: 1
    },
    {
      q: "Tu pareja deja la ropa tirada en el suelo.",
      options: [
        "Al desvestirte deja la ropa en el almacén de la ropa sucia",
        "Nunca recoges nada.",
        "No tires la ropa al suelo."
      ],
      correct: 0
    },
    {
      q: "Tu pareja deja los platos sin lavar en el fregadero.",
      options: [
        "Nunca lavas nada.",
        "Después de comer lava los platos.",
        "¡No dejes los platos sucios!"
      ],
      correct: 1
    },
    {
      q: "Tu hijo deja los zapatos tirados en la entrada.",
      options: [
        "Por favor, guarda tus zapatos en el zapatero de tu cuarto.",
        "¡No dejes los zapatos ahí!",
        "Siempre dejas todo tirado."
      ],
      correct: 0
    },
    {
      q: "Alguien sube el volumen de la televisión muy alto por la noche.",
      options: [
        "Nunca piensas en los demás.",
        "¡No subas tanto la televisión!",
        "Baja el volumen."
      ],
      correct: 2
    },
    {
      q: "Tu adolescente entra y cierra la puerta de un portazo.",
      options: [
        "Cierra la puerta despacio.",
        "Siempre haces lo mismo.",
        "No azotes la puerta"
      ],
      correct: 0
    },
    {
      q: "Alguien deja las luces encendidas al salir de una habitación.",
      options: [
        "Nadie apaga nada en esta casa.",
        "Por favor, apaga la luz cuando salgas de la habitación.",
        "¡No dejes las luces prendidas!"
      ],
      correct: 1
    },
    {
      q: "Tu hijo pequeño grita dentro de la casa.",
      options: [
        "¡No grites!",
        "Baja la voz, por favor.",
        "Te he dicho que no grites."
      ],
      correct: 1
    },
    {
      q: "Tu pareja usa tu toalla sin pedirla.",
      options: [
        "Luego de ducharte usa tu toalla.",
        "¡No uses mi toalla!",
        "Nunca respetas mis cosas."
      ],
      correct: 0
    },
    {
      q: "Alguien deja la tapa del inodoro levantada.",
      options: [
        "Siempre olvidas bajarla.",
        "¡No dejes la tapa arriba!",
        "Después de usar el inodoro deja la tapa abajo."
      ],
      correct: 2
    },
    {
      q: "Tu hijo come en el sofá y deja migas.",
      options: [
        "Para comer usa la mesa.",
        "Nunca comas en el sofá.",
        "¡No comas en el sofá!"
      ],
      correct: 0
    },
    {
      q: "Alguien entra con zapatos sucios y ensucia el piso.",
      options: [
        "Antes de entrar quítate los zapatos.",
        "Siempre ensucias todo.",
        "¡No entres con zapatos sucios!"
      ],
      correct: 0
    },
    {
      q: "Alguien deja la ropa húmeda en la lavadora mucho tiempo.",
      options: [
        "Por favor, saca tu ropa cuando termine el ciclo.",
        "¡No dejes la ropa húmeda tanto tiempo!",
        "Nadie saca la ropa nunca."
      ],
      correct: 0
    },
    {
      q: "Tu hijo juega con la pelota dentro de la casa.",
      options: [
        "Te he dicho mil veces ya.",
        "Juega con la pelota en el jardín.",
        "¡No juegues con la pelota adentro!"
      ],
      correct: 1
    },
    {
      q: "Alguien usa el último rollo de papel higiénico sin reponer.",
      options: [
        "Siempre pasa lo mismo.",
        "¡No uses el último sin poner otro!",
        "Cuando se termine el rollo pon uno nuevo, por favor."
      ],
      correct: 2
    },
    {
      q: "Tu hijo deja la mochila en medio del pasillo.",
      options: [
        "Siempre tropiezo con tus cosas.",
        "Al llegar guarda tu mochila en tu cuarto.",
        "¡No dejes la mochila ahí!"
      ],
      correct: 1
    }

  ],

  2: [
    // ===== NIVEL 2 (90 PREGUNTAS CON EXPLICACIÓN) =====
{
  q:"No me contestó el WhatsApp, seguro que ya no quiere saber nada de mí",
  options:["Generalización","Supresión","Distorsión"],
  correct:2,
  explanation:"(lectura mental) Asume lo que la otra persona piensa (“seguro que…”) y equipara no contestar = no querer saber nada. Pregunta sugerida: «¿Cómo sabes exactamente qué está pensando? ¿Qué otra razón podría haber para no contestar?» "
},
{
  q:"Si realmente me quisieras, no me dirías eso",
  options:["Distorsión","Generalización","Supresión"],
  correct:0,
  explanation:"(equivalencia compleja) Compara decir cierta cosa = no querer, y presupone que el amor verdadero implica nunca decir ciertas palabras. Pregunta sugerida: «¿Decir eso significa necesariamente que no te quiero? ¿Puede alguien quererte y aun así decirte eso?» "
},
{
  q:"Me ignora, seguro que me odia",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:"(lectura mental) Asume lo que la otra persona siente sin evidencia directa. Pregunta sugerida: «¿Cómo sabes que te odia? ¿Qué evidencia concreta tienes de eso?» "
},
{
  q:"Me gritó, eso significa que ya no me respeta",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:"(equivalencia compleja + lectura mental) Compara un comportamiento puntual (gritar) con una actitud permanente (no respetar). Pregunta sugerida: «¿Gritar significa necesariamente que no te respeta? ¿Puede gritar alguien y seguir respetándote?» "
},
{
  q:"No me felicitó por mi logro, tiene envidia de mí",
  options:["Generalización","Supresión","Distorsión"],
  correct:2,
  explanation:"(lectura mental) Asume la motivación interna de la otra persona sin preguntar. Pregunta sugerida: «¿Cómo sabes que es envidia? ¿Qué otras razones podría tener para no felicitarte?» "
},
{
  q:"Si me amara de verdad, sabría lo que necesito sin que se lo diga",
  options:["Supresión","Generalización","Distorsión"],
  correct:2,
  explanation:"(lectura mental + presuposición) Presupone que el amor verdadero incluye telepatía emocional. Pregunta sugerida: «¿Es posible amar a alguien y aun así no adivinar siempre sus necesidades?» "
},
{
  q:"Su silencio me está matando por dentro",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:"(causa-efecto + nominalización) Atribuye causa externa total a un sentimiento interno exagerado. Pregunta sugerida: «¿Cómo exactamente su silencio te está matando? "
},
{
  q:"Me rechazó porque soy un perdedor",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:"(causa-efecto + equivalencia compleja)Compara un rechazo puntual con una identidad global (“perdedor”). Pregunta sugerida: «¿Un rechazo significa que eres un perdedor en todo? ¿Qué otras explicaciones hay para ese rechazo?» "
},
{
  q:"Cuando no me mira a los ojos es porque me miente",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:"(equivalencia compleja + lectura mental) Compara un comportamiento corporal con una intención específica. Pregunta sugerida: «¿No mirar a los ojos siempre significa mentir? ¿Qué otras razones podría tener?» "
},
{
  q:"Si fuera una buena madre, no trabajaría tanto",
  options:["Generalización","Supresión","Distorsión"],
  correct:2,
  explanation:"(presuposición + equivalencia compleja) Presupone una definición rígida de “buena madre” y la equipara con no trabajar. Pregunta sugerida: «¿Trabajar mucho significa que no eres buena madre? ¿Puede una buena madre trabajar también?» "
},
{
  q:"Me duele la cabeza porque me estresas",
  options:["Supresión","Generalización","Distorsión"],
  correct:2,
  explanation:"(causa-efecto) Atribuye 100% la causa física a la otra persona. Pregunta sugerida: «¿Cómo exactamente yo te estoy causando el dolor de cabeza? ¿Qué parte tuya contribuye a eso?» "
},
{
  q:"No me abraza porque ya no siente nada por mí",
  options:["Distorsión","Generalización","Supresión"],
  correct:0,
  explanation:"(lectura mental + equivalencia compleja) Asume sentimiento interno y equipara falta de abrazo = falta de amor. Pregunta sugerida: «¿No abrazar significa necesariamente que no siente nada? ¿Hay otras formas de demostrar amor?» "
},
{
  q:"Si tuviera éxito sería feliz",
  options:["Supresión","Generalización","Distorsión"],
  correct:2,
  explanation:"(equivalencia compleja) Compara éxito externo con felicidad interna como si fueran lo mismo. Pregunta sugerida: «¿El éxito garantiza felicidad? ¿Puede alguien tener éxito y no ser feliz?» "
},
{
  q:"Me evita porque me desprecia",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:" (lectura mental) Asume la emoción de la otra persona sin evidencia. Pregunta sugerida: «¿Cómo sabes que es desprecio? ¿Qué otras razones podría tener para evitarte?» "
},
{
  q:"Mi ansiedad no me deja vivir",
  options:["Supresión","Generalización","Distorsión"],
  correct:2,
  explanation:"(causa-efecto + nominalización) Trata la ansiedad como una entidad independiente que controla totalmente la vida. Pregunta sugerida: «¿Cómo exactamente la ansiedad te impide vivir? ¿Qué puedes hacer aunque sientas ansiedad?» "
},
{
  q:"Si me quisiera no me criticaría",
  options:["Supresión","Distorsión","Generalización"],
  correct:1,
  explanation:"(equivalencia compleja + presuposición) Compara crítica = falta de amor. Pregunta sugerida: «¿Puede alguien quererte y aun así criticarte en algún momento?» "
},
{
  q:"Su enojo es mi culpa",
  options:["Generalización","Distorsión","Supresión"],
  correct:1,
  explanation:"(causa-efecto) Asume responsabilidad total por la emoción de otra persona. Pregunta sugerida: «¿Tú eres 100% responsable de su enojo? ¿Qué parte le corresponde a él?» "
},
{
  q:"No me saluda porque me considera inferior",
  options:["Distorsión","Supresión","Generalización"],
  correct:0,
  explanation:"(lectura mental) Lee la mente y asigna un juicio específico. Pregunta sugerida: «¿Cómo sabes que te considera inferior? ¿Qué otras explicaciones hay?» "
},
{
  q:"El fracaso prueba que soy un inútil",
  options:["Distorsión","Generalización","Supresión"],
  correct:0,
  explanation:"(Equivalencia compleja) Un evento puntual se convierte en prueba de identidad global. Pregunta sugerida: «¿Un fracaso significa que eres inútil en todo? ¿Qué otras interpretaciones hay?» "
},
{
  q:"Si fuera más fuerte no me afectaría",
  options:["Distorsión","Generalización","Supresión"],
  correct:0,
  explanation:"(presuposición + causa-efecto) Presupone que ser “fuerte” implica no sentir dolor. Pregunta sugerida: «¿Las personas fuertes nunca se afectan por nada? ¿Es realista eso?» "
},

// ---- SUPRESIÓN ----
{
  q:"No puedo más",
  options:["Supresión","Generalización","Distorsión"],
  correct:0,
  explanation:"Omite qué exactamente no puede soportar y en qué contexto. Pregunta sugerida: «¿No puedes más qué? ¿En qué situación específica?» "
},
{
  q:"Me duele",
  options:["Distorsión","Generalización","Supresión"],
  correct:2,
  explanation:"Omite dónde duele, cómo duele y desde cuándo. Pregunta sugerida: «¿Dónde te duele exactamente? ¿Cómo es ese dolor?» "
},
{
  q:"La gente es mala",
  options:["Generalización","Supresión","Lectura mental"],
  correct:1,
  explanation:"Omite qué gente específica y en qué sentido es mala. Pregunta sugerida: «¿Qué gente en particular? ¿Mala cómo exactamente?» "
},
{
  q:"No sirve de nada",
  options:["Generalización","Distorsión","Supresión"],
  correct:2,
  explanation:"Omite para qué no sirve y en qué condiciones. Pregunta sugerida: «¿No sirve de nada para qué objetivo concreto?» "
},
{
  q:"Me rechazan siempre",
  options:["Supresión","Generalización","Equivalencia compleja"],
  correct:0,
  explanation:"Omite quién rechaza y cómo lo hace. Pregunta sugerida: «¿Quién te rechaza? ¿De qué forma?» "
},
{
  q:"Es difícil",
  options:["Supresión","Nominalización","Presuposición"],
  correct:0,
  explanation:"Omite qué es difícil y para quién. Pregunta sugerida: «¿Qué exactamente es difícil? ¿Difícil para quién?» "
},
{
  q:"No entiendo",
  options:["Distorsión","Supresión","Generalización"],
  correct:1,
  explanation:"Omite qué no entiende y por qué. Pregunta sugerida: «¿Qué parte no entiendes? ¿Qué te impide entenderlo?» "
},
{
  q:"Me molesta mucho",
  options:["Supresión","Generalización","Causa-efecto"],
  correct:0,
  explanation:"Omite qué molesta exactamente y cómo molesta. Pregunta sugerida: «¿Qué exactamente te molesta? ¿Cómo te molesta?» "
},
{
  q:"No tengo tiempo",
  options:["Generalización","Supresión","Distorsión"],
  correct:1,
  explanation:"Omite para qué no tiene tiempo. Pregunta sugerida: «¿Tiempo para qué actividad específica?» "
},
{
  q:"Es caro",
  options:["Distorsión","Supresión","Generalización"],
  correct:1,
  explanation:"Omite comparado con qué es caro. Pregunta sugerida: «¿Caro comparado con qué?» "
},
{
  q: "Me siento mal",
  options: ["Supresión","Generalización","Distorsión"],
  correct: 0,
  explanation: "Omite por qué y cómo se siente mal. ¿Por qué te sientes mal? ¿Cómo es ese malestar?"
},
{
  q: "No funciona",
  options: ["Generalización","Distorsión","Supresión"],
  correct: 2,
  explanation: "Omite qué no funciona y cómo debería funcionar. ¿Qué exactamente no funciona? ¿Cómo debería funcionar?"
},
{
  q: "Tengo miedo",
  options: ["Supresión","Generalización","Nominalización"],
  correct: 0,
  explanation: "Omite a qué o de qué tiene miedo. ¿Miedo a qué exactamente?"
},
{
  q: "Es aburrido",
  options: ["Distorsión","Supresión","Generalización"],
  correct: 1,
  explanation: "Omite por qué es aburrido y para quién. ¿Aburrido por qué? ¿Aburrido para quién?"
},
{
  q: "No sé",
  options: ["Generalización","Supresión","Distorsión"],
  correct: 1,
  explanation: "Omite qué no sabe. ¿No sabes qué exactamente?"
},
{
  q: "Me ignora",
  options: ["Supresión","Generalización","Lectura mental"],
  correct: 0,
  explanation: "Omite cómo ignora y en qué situaciones. ¿Cómo te ignora? ¿En qué momentos?"
},
{
  q: "Duele mucho",
  options: ["Distorsión","Supresión","Generalización"],
  correct: 1,
  explanation: "Omite dónde y cómo duele. ¿Dónde duele? ¿Cómo es ese dolor?"
},
{
  q: "No hay salida",
  options: ["Supresión","Generalización","Distorsión"],
  correct: 0,
  explanation: "Omite de qué situación no hay salida. ¿Salida de qué situación exactamente?"
},
{
  q: "Me da igual",
  options: ["Generalización","Supresión","Nominalización"],
  correct: 1,
  explanation: "Omite respecto a qué le da igual. ¿Te da igual qué cosa en particular?"
},
{
  q: "Es tarde",
  options: ["Supresión","Distorsión","Generalización"],
  correct: 0,
  explanation: "Omite para qué es tarde. ¿Tarde para qué?"
},
{
  q: "No puedo cambiar",
  options: ["Generalización","Supresión","Distorsión"],
  correct: 1,
  explanation: "Omite qué no puede cambiar. ¿No puedes cambiar qué exactamente?"
},
{
  q: "Me confunde",
  options: ["Supresión","Generalización","Lectura mental"],
  correct: 0,
  explanation: "Omite qué confunde. ¿Qué exactamente te confunde?"
},
{
  q: "Es complicado",
  options: ["Distorsión","Supresión","Generalización"],
  correct: 1,
  explanation: "Omite en qué sentido es complicado. ¿Complicado en qué sentido?"
},
{
  q: "No me gusta",
  options: ["Supresión","Generalización","Distorsión"],
  correct: 0,
  explanation: "Omite qué no gusta y por qué. ¿Qué no te gusta? ¿Por qué no te gusta?"
},
{
  q: "Me frustra",
  options: ["Generalización","Supresión","Causa-efecto"],
  correct: 1,
  explanation: "Omite qué frustra. ¿Qué exactamente te frustra?"
},
{
  q: "Es injusto",
  options: ["Supresión","Distorsión","Generalización"],
  correct: 0,
  explanation: "Omite por qué es injusto y según quién. ¿Injusto por qué? ¿Según qué criterio?"
},
{
  q: "No lo logro",
  options: ["Generalización","Supresión","Nominalización"],
  correct: 1,
  explanation: "Omite qué no logra. ¿No logras qué exactamente?"
},
{
  q: "Me agobia",
  options: ["Supresión","Generalización","Distorsión"],
  correct: 0,
  explanation: "Omite qué agobia. ¿Qué exactamente te agobia?"
},
{
  q: "Es ridículo",
  options: ["Distorsión","Supresión","Generalización"],
  correct: 1,
  explanation: "Omite por qué es ridículo. ¿Ridículo por qué?"
},
{
  q: "No hay esperanza",
  options: ["Supresión","Generalización","Distorsión"],
  correct: 0,
  explanation: "Omite esperanza de qué. ¿Esperanza de qué exactamente?"
},

// ---- GENERALIZACIÓN ----
{
  q:"Siempre me pasa lo peor",
  options:["Supresión","Generalización","Distorsión"],
  correct:1,
  explanation:"(cuantificador universal: “siempre”) Usa “siempre” para absolutizar una experiencia negativa. Pregunta sugerida: «¿Siempre? ¿Recuerdas alguna vez que no haya pasado lo peor?» "
},
{
  q:"Todos los hombres mienten",
  options:["Generalización","Distorsión","Supresión"],
  correct:0,
  explanation:"(cuantificador universal: “todos”) “Todos” aplica una experiencia a un grupo entero sin excepciones. Pregunta sugerida: «¿Todos sin excepción? ¿Conoces algún hombre que no mienta?» "
},
{
  q:"Nunca voy a ser feliz",
  options:["Supresión","Distorsión","Generalización"],
  correct:2,
  explanation:" (cuantificador universal: “nunca”) “Nunca” proyecta al futuro de forma absoluta e inamovible. Pregunta sugerida: «¿Nunca? ¿Qué evidencia tienes de que es imposible?» "
},
{
  q:"Nadie me quiere de verdad",
  options:["Distorsión","Generalización","Supresión"],
  correct:1,
  explanation:"(cuantificador universal: “nadie”) “Nadie” absolutiza y elimina cualquier posibilidad.Pregunta sugerida: «¿Nadie? ¿Hay alguien que te haya demostrado querer?»"
},
{
  q:"Todo me sale mal",
  options:["Generalización","Supresión","Distorsión"],
  correct:0,
  explanation:"(cuantificador universal: “todo”) “Todo” absolutiza experiencias negativas sin excepciones. Pregunta sugerida: «¿Todo? ¿Qué cosas sí te han salido bien?» "
},
{
  q:"Ninguna dieta funciona",
  options:["Supresión","Generalización","Nominalización"],
  correct:1,
  explanation:"(cuantificador universal: “ninguna”) “Ninguna” descarta todas las posibilidades sin excepciones. Pregunta sugerida: «¿Ninguna? ¿Has probado todas? ¿Alguna funcionó aunque sea un poco?» "
},
{
  q:"Siempre llego tarde",
  options:["Generalización","Distorsión","Supresión"],
  correct:0,
  explanation:"(cuantificador universal: “siempre”) “Siempre” convierte un hábito en una regla absoluta. Pregunta sugerida: «¿Siempre? ¿Hay alguna ocasión en que llegaste a tiempo?» "
},
{
  q:"Todos los políticos roban",
  options:["Supresión","Generalización","Lectura mental"],
  correct:1,
  explanation:"(cuantificador universal: “todos”) “Todos” generaliza sin permitir excepciones.Pregunta sugerida: «¿Todos? ¿Conoces algún político que no robe?»"
},
{
  q:"Nunca tengo suerte",
  options:["Distorsión","Supresión","Generalización"],
  correct:2,
  explanation:"(cuantificador universal: “nunca”) “Nunca” absolutiza la ausencia de suerte.Pregunta sugerida: «¿Nunca? ¿Recuerdas alguna vez que hayas tenido suerte?»"
},
{
  q:"Ningún amigo es leal",
  options:["Generalización","Supresión","Distorsión"],
  correct:0,
  explanation:"(cuantificador universal: “ningún”) “Ningún” elimina toda posibilidad de lealtad. Pregunta sugerida: «¿Ningún? ¿Hay algún amigo que te haya demostrado lealtad?» "
},
{
  q:"Todo el mundo me juzga",
  options:["Supresión","Generalización","Lectura mental"],
  correct:1,
  explanation:" (cuantificador universal: “todo el mundo”) “Todo el mundo” absolutiza el juicio ajeno. Pregunta sugerida: «¿Todo el mundo? ¿Quién específicamente te juzga?» "
},
{
  q:"Siempre me equivoco",
  options:["Generalización","Distorsión","Supresión"],
  correct:0,
  explanation:"(cuantificador universal: “siempre”) “Siempre” convierte errores puntuales en una regla fija.  Pregunta sugerida: «¿Siempre? ¿Hay decisiones en las que no te equivocaste?» "
},
{
  q:"Nadie entiende mi dolor",
  options:["Distorsión","Supresión","Generalización"],
  correct:2,
  explanation:"(cuantificador universal: “nadie”) “Nadie” absolutiza la incomunicación. Pregunta sugerida: «¿Nadie? ¿Hay alguien que aunque sea un poco te haya entendido?» "
},
{
  q:"Ningún trabajo me gusta",
  options:["Supresión","Generalización","Nominalización"],
  correct:1,
  explanation:"(cuantificador universal: “ningún”) “Ningún” descarta todas las opciones laborales. Pregunta sugerida: «¿Ningún? ¿Has probado muchos? ¿Alguno te gustó aunque sea parcialmente?» "
},
{
  q:"Siempre me abandonan",
  options:["Generalización","Supresión","Distorsión"],
  correct:0,
  explanation:"(cuantificador universal: “siempre”) “Siempre” proyecta el abandono como inevitable.Pregunta sugerida: «¿Siempre? ¿Hubo alguna relación donde no te abandonaran?»"
},
{
  q:"Todo es culpa mía",
  options:["Distorsión","Generalización","Supresión"],
  correct:1,
  explanation:"(cuantificador universal: “todo”) “Todo” asume responsabilidad absoluta. Pregunta sugerida: «¿Todo? ¿Qué cosas no son tu culpa?» "
},
{
  q:"Nunca cambio",
  options:["Supresión","Generalización","Nominalización"],
  correct:1,
  explanation:"(cuantificador universal: “nunca”) “Nunca” niega cualquier posibilidad de cambio.Pregunta sugerida: «¿Nunca? ¿Has cambiado en algo a lo largo de tu vida?»"
},
{
  q:"Ninguna relación dura",
  options:["Generalización","Distorsión","Supresión"],
  correct:0,
  explanation:"(cuantificador universal: “ninguna”) “Ninguna” absolutiza el fracaso relacional. Pregunta sugerida: «¿Ninguna? ¿Conoces alguna relación que haya durado?» "
},
{
  q:"Todos me usan",
  options:["Supresión","Generalización","Lectura mental"],
  correct:1,
  explanation:"(cuantificador universal: “todos”)  “Todos” generaliza intenciones negativas. Pregunta sugerida: «¿Todos? ¿Hay alguien que te haya tratado sin usarte?» "
},
{
  q:"Siempre pierdo",
  options:["Generalización","Supresión","Distorsión"],
  correct:0,
  explanation:"(cuantificador universal: “siempre”) “Siempre” convierte pérdidas puntuales en patrón fijo. Pregunta sugerida: «¿Siempre? ¿En qué situaciones has ganado?» "
},
{
  q:"Nadie me respeta",
  options:["Distorsión","Supresión","Generalización"],
  correct:2,
  explanation:"(cuantificador universal: “nadie”) “Nadie” absolutiza la falta de respeto. Pregunta sugerida: «¿Nadie? ¿Quién te ha demostrado respeto?» "
},
{
  q:"Todo está perdido",
  options:["Supresión","Generalización","Nominalización"],
  correct:1,
  explanation:"(cuantificador universal: “todo”) “Todo” absolutiza la desesperanza. Pregunta sugerida: «¿Todo? ¿Qué cosas no están perdidas?» "
},
{
  q:"Nunca aprenderé",
  options:["Generalización","Distorsión","Supresión"],
  correct:0,
  explanation:"(cuantificador universal: “nunca”) “Nunca” niega cualquier capacidad de aprendizaje futuro. Pregunta sugerida: «¿Nunca? ¿Has aprendido algo nuevo recientemente?» "
},
{
  q:"Ningún hombre es bueno",
  options:["Supresión","Generalización","Lectura mental"],
  correct:1,
  explanation:"(cuantificador universal: “ningún”)   “Ningún” descarta toda posibilidad positiva. Pregunta sugerida: «¿Ningún? ¿Conoces algún hombre que sea bueno?» "
},
{
  q:"Siempre me siento solo",
  options:["Generalización","Supresión","Distorsión"],
  correct:0,
  explanation:"(cuantificador universal: “siempre”)  “Siempre” absolutiza la soledad. Pregunta sugerida: «¿Siempre? ¿Hay momentos en que no te sientes solo?» "
},
{
  q:"Todo el mundo miente",
  options:["Distorsión","Generalización","Supresión"],
  correct:1,
  explanation:"(cuantificador universal: “todo el mundo”)  “Todo el mundo” generaliza la mentira como universal. Pregunta sugerida: «¿Todo el mundo? ¿Hay alguien que te haya dicho la verdad?» "
},
{
  q:"Nunca consigo lo que quiero",
  options:["Supresión","Generalización","Nominalización"],
  correct:1,
  explanation:"(cuantificador universal: “nunca”)  “Nunca” absolutiza la frustración. Pregunta sugerida: «¿Nunca? ¿Alguna vez conseguiste algo que querías?» "
},
{
  q:"Ninguna ayuda sirve",
  options:["Generalización","Distorsión","Supresión"],
  correct:0,
  explanation:"(cuantificador universal: “ninguna”) “Ninguna” descarta cualquier posibilidad de ayuda útil. Pregunta sugerida: «¿Ninguna? ¿Has probado todas? ¿Alguna te ayudó aunque sea un poco?» "
},
{
  q:"Siempre me critican",
  options:["Supresión","Generalización","Lectura mental"],
  correct:1,
  explanation:"(cuantificador universal: “siempre”) “Siempre” convierte críticas puntuales en constante. Pregunta sugerida: «¿Siempre? ¿Hay momentos en que no te critican?» "
},
{
  q:"Nadie puede conmigo",
  options:["Generalización","Supresión","Distorsión"],
  correct:0,
  explanation:"(cuantificador universal: “Nadie”) “Nadie” absolutiza la invencibilidad o aislamiento.Pregunta sugerida: «¿Nadie? ¿Hay alguien que sí haya podido ayudarte o apoyarte?»"
}
  ]
};

// =============================
//       VARIABLES GLOBALES
// =============================
let currentLevel = parseInt(localStorage.getItem("pnl_level")) || 1;
let score = 0;
let currentIndex = 0;
let currentQuestions = [];
let timer = null;
let timeLeft = 15;
const TIME_LIMIT = 15;

// =============================
//     FUNCIONES UTILIDAD
// =============================
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
function startTimer() {
  clearInterval(timer);
  timeLeft = TIME_LIMIT;

  timer = setInterval(() => {
    timeLeft--;

    const timerEl = document.getElementById("timer");
    if (timerEl) {
      timerEl.textContent = timeLeft;
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      timeExpired();
    }
  }, 1000);
}

function timeExpired() {
  const container = document.getElementById("testContainer");

  container.innerHTML = `
    <div style="
      background:#fff;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:400px;
      margin:auto;
      text-align:center;
    ">
      <h2>⏱ Excediste el tiempo para responder</h2>
      <p>Serás devuelto a la pantalla principal</p>
    </div>
  `;

  setTimeout(() => {
    stopTest();
  }, 2500);
}
// =============================
//     INICIAR TEST
// =============================

window.startPNLTest = function () {

  if (!questionsByLevel[currentLevel]) {
    alert("Ya completaste todos los niveles 🎉");
    localStorage.setItem("pnl_level", 1);
    currentLevel = 1;
  }

  score = 0;
  currentIndex = 0;

  const allQuestions = questionsByLevel[currentLevel];
  currentQuestions = shuffleArray(allQuestions).slice(0, 20);

  showInstructions(); // ⬅️ EN VEZ DE loadTestUI()
};

function showInstructions() {
  document.body.style.overflow = "hidden";

  let container = document.getElementById("testContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "testContainer";
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.background = "rgba(0,0,0,0.7)";
    container.style.zIndex = "99999";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    document.body.appendChild(container);
  }

  container.innerHTML = `
    <div style="
      background:#fff;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      text-align:center;
    ">
      <h2>Instrucciones</h2>

      <p style="margin-top:15px;font-size:18px;">
        A continuación se presenta una oración de un evento con
        <strong>tres posibles respuestas</strong>.
        <br><br>
        Selecciona la opción correcta usando el
        <strong>lenguaje asertivo</strong>.
        <br><br>
        Cada pregunta tiene un tiempo máximo de
        <strong>15 segundos</strong>.
      </p>

      <button onclick="loadTestUI()" style="
        margin-top:25px;
        width:100%;
        padding:12px;
        background:#286bcf;
        color:white;
        border:none;
        border-radius:10px;
        font-size:18px;
        cursor:pointer;
      ">
        Continuar
      </button>
    </div>
  `;
}


// =============================
//       CONTENEDOR
// =============================
function loadTestUI() {
  document.body.style.overflow = "hidden";

  let container = document.getElementById("testContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "testContainer";
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.background = "rgba(0,0,0,0.7)";
    container.style.zIndex = "99999";
    container.style.padding = "40px 0";
    container.style.overflowY = "auto";
    document.body.appendChild(container);
  }

  loadQuestion();
}

// =============================
//       MOSTRAR PREGUNTA
// =============================
function loadQuestion() {
  clearInterval(timer);
  timeLeft = TIME_LIMIT;
  const container = document.getElementById("testContainer");
  container.innerHTML = "";

  if (currentIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  const q = currentQuestions[currentIndex];
  const questionNumber = currentIndex + 1;

  container.innerHTML = `
    <div style="
      background:#A2D9CE;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      margin:auto;
      position:relative;
      text-align:center;
    ">
    <!-- CERRAR TEST -->

    <span onclick="stopTest()" style="
    position:absolute;
    top:15px;
    right:20px;
    font-size:28px;
    font-weight:bold;
    cursor:pointer;
    color:black;

    ">
    X
    </span>

   
    
     <!-- NUMERO DE PREGUNTA -->
     <div style="
      position:absolute;
      top:50px;
      left:20px;
      font-size:28px;
      font-weight:bold;
      color:#286bcf;
      ">
      ${questionNumber} / ${currentQuestions.length}
     </div>

      <!-- CRONÓMETRO -->
      <div style="
      position:absolute;
      top:15px;
      left:20px;
      font-size:22px;
      font-weight:bold;
      color:#b71c1c;
     ">
     ⏱ <span id="timer">15</span>s
      </div>



      
      <h2>Nivel ${currentLevel}</h2>

      <img 
        src="pregunta.svg"
        alt="Ilustración test"
        style="width:100%;max-width:220px;margin:15px auto;display:block;"
      >

      <p style="margin-top:15px;font-size:20px;">
        ${q.q}
      </p>

      ${q.options.map((opt, i) => `
        <button
          onclick="answer(${i})"
          style="
            width:100%;
            padding:12px;
            margin-top:10px;
            border:none;
            border-radius:10px;
            background:#286bcf;
            color:#fff;
            font-size:16px;
            cursor:pointer;
          ">
          ${opt}
        </button>
      `).join("")}
    </div>
  `;

  window.scrollTo(0, 0);
  startTimer();
}

// =============================
//       RESPONDER
// =============================
/*function answer(optionIndex) {
  if (optionIndex === currentQuestions[currentIndex].correct) {
    score++;
  }

  currentIndex++;
  loadQuestion();
} */
/*
function answer(optionIndex) {
  clearInterval(timer);

  if (optionIndex === currentQuestions[currentIndex].correct) {
    score++;
  }
 */
function answer(optionIndex) {
  clearInterval(timer);

  const q = currentQuestions[currentIndex];
  const isCorrect = optionIndex === q.correct;

  if (isCorrect) score++;

  // 👉 SOLO NIVEL 2 muestra explicación
  if (currentLevel === 2) {
    showFeedback(q, isCorrect);
  } else {
    currentIndex++;
    loadQuestion();
  }
}
function nextQuestion() {
  currentIndex++;
  loadQuestion();
}
/*
function answer(optionIndex) {
  clearInterval(timer);

  const q = currentQuestions[currentIndex];
  const isCorrect = optionIndex === q.correct;

  if (isCorrect) score++;

  showFeedback(q, isCorrect);
}

  currentIndex++;
  loadQuestion();
}*/

function showFeedback(question, isCorrect) {
  const container = document.getElementById("testContainer");

  container.innerHTML = `
    <div style="
      background:#fff;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      margin:auto;
      text-align:center;
    ">
      <h2>${isCorrect ? "✅ Correcto" : "❌ Incorrecto"}</h2>

      <p style="margin-top:15px;font-size:18px;">
        <strong>Explicación:</strong><br>
        ${question.explanation || "Sin explicación"}
      </p>

      <button onclick="nextQuestion()" style="
        margin-top:20px;
        width:100%;
        padding:12px;
        background:#286bcf;
        color:white;
        border:none;
        border-radius:10px;
        font-size:18px;
        cursor:pointer;
      ">
        Siguiente
      </button>
    </div>
  `;
}

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

/*if (currentLevel === 2) {
  showFeedback(q, isCorrect);
} else {
  currentIndex++;
  loadQuestion();
}*/

// =============================
//       RESULTADO
// =============================
function showResult() {
  const container = document.getElementById("testContainer");

  const passScore = Math.ceil(currentQuestions.length * 0.7);
  const passed = score >= passScore;

  container.innerHTML = `
    <div style="
      background:#fff;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      margin:auto;
      text-align:center;
    ">
      <h2>Resultado Nivel ${currentLevel}</h2>

      <div style="
        width:120px;
        height:120px;
        margin:20px auto;
        border-radius:50%;
        background:${passed ? "green" : "red"};
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:32px;
        color:#fff;
        font-weight:bold;
      ">
        ${score}
      </div>

      ${
        passed
          ? `<button onclick="nextLevel()" style="width:100%;padding:12px;background:#28a745;color:white;border:none;border-radius:10px;font-size:18px;">Continuar</button>`
          : `<button onclick="repeatLevel()" style="width:100%;padding:12px;background:#ff9800;color:white;border:none;border-radius:10px;font-size:18px;">Repetir prueba</button>`
      }

      <button onclick="stopTest()" style="width:100%;padding:12px;margin-top:10px;background:#b71c1c;color:white;border:none;border-radius:10px;font-size:18px;">
        Detener Test
      </button>
    </div>
  `;

  if (passed) {
    localStorage.setItem("pnl_level", currentLevel + 1);
  }
}

// =============================
//       CONTROLES
// =============================
function repeatLevel() {
  score = 0;
  currentIndex = 0;
  currentQuestions = shuffleArray(questionsByLevel[currentLevel]).slice(0, 20);
  loadQuestion();
}

function nextLevel() {
  currentLevel++;

  if (!questionsByLevel[currentLevel]) {
    alert("Has completado todos los niveles 🎉");
    stopTest();
    return;
  }

  localStorage.setItem("pnl_level", currentLevel);
  score = 0;
  currentIndex = 0;
  currentQuestions = shuffleArray(questionsByLevel[currentLevel]).slice(0, 20);
  loadQuestion();
}

function stopTest() {
  const container = document.getElementById("testContainer");
  if (container) container.remove();
  document.body.style.overflow = "auto";
}
// =============================
//   CONFIRMAR CIERRE DEL TEST
// =============================
window.confirmCloseTest = function () {
  if (confirm("¿Deseas salir del test? Perderás tu progreso actual.")) {
    stopTest();
  }
};