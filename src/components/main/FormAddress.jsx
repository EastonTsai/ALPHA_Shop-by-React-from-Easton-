
// 表單 Select 的選項 
const genderOptions = [
  {value: "mr", name: "先生"},
  {value: "ms", name: "小姐"},
  {value: "mx", name: "不明"},
]
const cityOptions = [
  { value: '', name: '請選擇縣市' },
  { value: "KLU", name: '基隆市' },
  { value: "TPH", name: '新北市' },
  { value: "TPE", name: '臺北市' },
  { value: "TYC", name: '桃園市' },
  { value: "HSH", name: '新竹縣' },
  { value: "HSC", name: '新竹市' },
  { value: "MAC", name: '苗栗市' },
  { value: "MAL", name: '苗栗縣' },
  { value: "TXG", name: '臺中市' },
  { value: "CWH", name: '彰化縣' },
  { value: "CWS", name: '彰化市' },
  { value: "NTC", name: '南投市' },
  { value: "NTO", name: '南投縣' },
  { value: "YLH", name: '雲林縣' },
  { value: "CHY", name: '嘉義縣' },
  { value: "CYI", name: '嘉義市' },
  { value: "TNN", name: '臺南市' },
  { value: "KHH", name: '高雄市' },
  { value: "IUH", name: '屏東縣' },
  { value: "PTS", name: '屏東市' },
  { value: "ILN", name: '宜蘭縣' },
  { value: "ILC", name: '宜蘭市' },
  { value: "HWA", name: '花蓮縣' },
  { value: "HWC", name: '花蓮市' },
  { value: "TTC", name: '臺東市' },
  { value: "TTT", name: '臺東縣' },
  { value: "PEH", name: '澎湖縣' },
  { value: "KMN", name: '金門縣' },
  { value: "LNN", name: '連江縣' },
]

function FormAddress (){
  return(
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select name="gender" defaultValue="mr">
              {genderOptions.map( gender => 
                <option key={gender.value} value={gender.value}>{gender.name}</option>
              )}
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <div className="input-label">姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">電話</div>
            <input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">Email</div>
            <input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <select name="county" defaultValue="">
                {cityOptions.map( city => 
                  <option key={city.value} value={city.value}>{city.name}</option>
                )}
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">地址</div>
            <input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  )
}

export default FormAddress;