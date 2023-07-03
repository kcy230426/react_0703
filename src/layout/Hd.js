const Hd = (props) => { 
    const hddata = {
        pAction : props.action,
        promotion : {
             title : "오늘의 특가",
             href : "http://www.naver.com",
             target : "_blank",
             cls : "event"
        },
        gnb : [
                {
                    title : "연령별 고민",
                    href : "#consolut",
                    target : "",
                    cls : ""
                 },
                {
                title : "스테디셀러",
                href : "#seller",
                target : "",
                cls : ""
                },
                {
                    title : "1만 리뷰",
                    href : "#review",
                    target : "",
                    cls : ""
                },
                {
                    title : "요즘 인기",
                    href : "#hot",
                    target : "",
                    cls : ""
                }
        ],
        util : [
            {
                title : "공유하기",
                href : "#share",
                target : "",
                cls : "share"
             }
        ]
    }  


    return (     
        <header id="hd" className={`fixed-top  border-bottom  bg-warning  ${props.scrollcls}`}>
            <div className="container px-0">
                <div className="d-flex  justify-content-between align-items-center">
                    <h1><a href="#top">
                        <strong>로고</strong>
                        </a>
                    </h1>
                    <ul id="gnb" className="d-flex">
                        {
                             
                         hddata.gnb.map(function(v, i){
                            return(
                              <>
                              <li className="px-2" key={`s_${1}`}><a href={v.href} className="d-block">{v.title}</a></li>
                              { hddata.pAction && 
                                   (  i === 1 &&
                                        <li className={`px-2 ${hddata.promotion.cls}`}>
                                            <a href={hddata.promotion.href} >{hddata.promotion.title}</a>
                                        </li>                                    
                                   ) 
                                } 
                              </>
                            )                            
                         })
                        }                 
                    </ul>
                    <ul className="sns d-flex align-items-center">
                       { 
                         hddata.util.map(function(v, i){
                            return <li className="px-1" key={`s_${1}`}>
                                      <a href={v.href}>
                                         <span className="visually-hidden">공유하기</span>
                                      </a>
                                    </li> 
                          })                       
                       }
                                             
                    </ul>
                </div>
            </div>     
        </header> 
    )
}
export default Hd

