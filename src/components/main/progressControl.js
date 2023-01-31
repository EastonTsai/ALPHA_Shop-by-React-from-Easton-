

function ProgressControl(){

  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase="address">
        <button class="next">
          下一步
          <svg class="cursor-point">
            {/* <use xlink:href="#svg-icon-right-arrow"></use> */}
          </svg>
        </button>
      </section>
      <section class="button-group col col-12" data-phase="shipping">
        <button class="prev">
          <svg class="cursor-point">
            {/* <use xlink:href="#svg-icon-left-arrow"></use> */}
          </svg>
          上一步
        </button>
        <button class="next">
          下一步
          <svg class="cursor-point">
            {/* <use xlink:href="#svg-icon-right-arrow"></use> */}
          </svg>
        </button>
      </section>
      <section class="button-group col col-12" data-phase="credit-card">
        <button class="prev">
          <svg class="cursor-point">
            {/* <use xlink:href="#svg-icon-left-arrow"></use> */}
          </svg>
          上一步
        </button>
        <button class="next">
          確認下單
        </button>
      </section>
    </section>
  )
}

export default ProgressControl;