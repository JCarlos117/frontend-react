:- use_module(library(lists)).

% Afinidades por carrera
afin(carrera(ingenieria), [resolver_problemas, matematicas, logica, analisis, tecnologia]).
afin(carrera(psicologia), [ayudar_personas, empatia, comunicacion, escucha, conducta]).
afin(carrera(medicina), [ayudar_personas, biologia, salud, ciencia, vocacion]).
afin(carrera(arquitectura), [creatividad, diseno, arte, dibujo, innovacion]).
afin(carrera(disenio_grafico), [creatividad, arte, comunicacion_visual, estetica, colores]).
afin(carrera(administracion), [liderazgo, organizacion, trabajo_en_equipo, estrategia]).
afin(carrera(educacion), [ayudar_personas, empatia, comunicacion, pedagogia]).
afin(carrera(informatica), [tecnologia, programacion, logica, resolver_problemas]).

% Evaluación con lógica porcentual
coincidencia(Usuario, Carrera, Porcentaje) :-
    afin(carrera(Carrera), Caracteristicas),
    intersection(Usuario, Caracteristicas, Coincidencias),
    length(Coincidencias, N),
    length(Caracteristicas, Total),
    Total > 0,
    Porcentaje is (N / Total) * 100.
