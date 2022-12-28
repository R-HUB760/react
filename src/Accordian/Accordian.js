import React from 'react'
import DataAccord from './DataAccord'

function Accordian() {
  return (
    <>
      <div class="row bg-secondary p-5 align-items-center justify-content-center">
        <h2 class="text-center">FAQ</h2>
        <div class="col-md col-lg-6">
          <article class="">

            {DataAccord.map((accord) => {
              const { id, title, subtitle, dess } = accord;
              return (
                <details class="my-3" key={id}>
                  <summary class="bg-dark fs-6 p-2 shadow-sm">{title}</summary>
                  <div class="p-3 deSumDiv">
                    <h4 class="text-warning">{subtitle}</h4>
                    <p class="text-justify-center">
                      {dess}
                    </p>
                  </div>
                </details>
              )
            }

            )}

          </article>
        </div>
      </div>
    </>
  )
}

export default Accordian