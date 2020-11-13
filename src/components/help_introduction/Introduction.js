import React from 'react';

function Introduction() {

  return (
    <div className="container card-msg mt-4 mb-4">
          <div className="card-body">
            <h1 className="text-center mt-2 mb-2 color-main font-weight-bold">PRESENTACIÓN</h1>
            <p className="card-text text-center">
              En el Manual Interactivo y Bilingüe para Identificar Defectos en los Procesos de Confecciones se han recopilado
              los defectos más comunes durante la elaboración de prendas de vestir. Esto ha sido posible gracias a la experiencia
              de las instructoras del Centro de Formación en Diseño, Confección y Moda.
            </p>

            <p className="font-weight-bold color-main">
              Los defectos han sido agrupados en tres categorías, así:
            </p>

            <ul className="list-group mb-2">
              <li className="list-group-item">
                <span className="font-weight-bold color-main"> 1) </span>
                Defectos por proceso textil:desarrollo textil, tejeduría, tintorería y acabados.
              </li>
              <li className="list-group-item">
                <span className="font-weight-bold color-main"> 2) </span>
                Defectos por proceso de corte, almacenamiento, empaque, acabados, insumos y diseño.
              </li>
              <li className="list-group-item">
                <span className="font-weight-bold color-main"> 3) </span>
                Defectos por procesos de confección.
              </li>
            </ul>

            <p>
              En esta herramienta interactiva se dispone la información de los defectos en español y en inglés paralelamente.
              Además, el usuario (aprendices e instructores) podrá encontrar en cada defecto el nombre común, la norma técnica
              que lo identifica, una foto del defecto, su definición y la clasificación que se le da, ya sea de primera,
              segunda o si no clasifica según el grado de afectación de la prenda.
            </p>
            <p>
              Este manual se encuentra albergado en {' '}
              <a
                className="color-main font-weight-bold"
                target="_blank"
                href="https://musicprogram.github.io/book-interactive/">
                https://musicprogram.github.io/book-interactive/
              </a>,
              el usuario encontrará varios enlaces que le permitirán navegar por las tres categorías. 
              Al terminar de visualizar todos los defectos de cada categoría, se propone una serie de ejercicios para 
              fortalecer su comprensión y dominio en el tema.
            </p>

            <p>
              El recorrido por los defectos como los ejercicios podrán hacerse consecutiva o aleatoriamente.
              Es decir que en cualquier momento se puede saltar a un defecto en particular (desde la pestaña de la categoría que desee)
              o ir directamente a las actividades interactivas. Estas pueden ser aplicadas como ejercicio de
              reconocimiento de aprendizajes previos o al finalizar, como ejercicio de apropiación.
              Todo dependerá de la necesidad o propuesta que haga el instructor en el momento.
            </p>

            <p>
              Tanto instructores como aprendices tienen en este manual la oportunidad de acceder a información que
              hasta ahora ha sido exclusiva de empresas, y por tanto, privada o de organizaciones que venden sus
              derechos para poder tener esta información a la mano.
            </p>

            <p>
              Tener los datos categorizados y presentados de esta manera, permitirá reconocer e interiorizar estos
              conceptos de manera práctica y efectiva, esto se traduce en un gran aporte a la formación en
              procesos de calidad de confección.
            </p>

            <p>
              Así mismo, el hecho de disponer de este manual en internet facilita su acceso en cualquier momento,
              y desde cualquier dispositivo. Su navegabilidad es bastante intuitiva y rápida, con lo cual se
              espera un máximo aprovechamiento de la herramienta dentro y fuera de formación.
            </p>
            
          </div>
    </div>
  );
}

export default Introduction;
