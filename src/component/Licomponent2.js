import React from 'react'
import licom from '../scss/licom2.module.css'

const Licom2 = () => {
    const sellerdb = [
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094643_7ba63bc11a8bdb72b034706328821f5e.png",
            brandnm : "블랙모어스",
            proprice : '44,900',
            saleprice : '71,700',
            num:"37",
            pronm : "프로폴리스 3병"
        },
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094643_191180d4fe5ea88be7a06336fc55b8db.png",
            brandnm : "콤비타",
            proprice : '48,000',
            saleprice : '75,000',
            num:"36",
            pronm : "프로폴리스 스프레이 20ml 3박스"
        },
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094643_340679985d4f4ffcab782489715064c2.png",
            brandnm : "닥터아돌",
            proprice : '46,000',
            saleprice : '46,000',
            num:" ",
            pronm : "프로폴리스 아연C 1박스"
        },
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094643_f1deb6c0df1179c4f541d557543a2ca2.png",
            brandnm : "뉴트리코어",
            proprice : '29,000',
            saleprice : '500,000',
            num:"94",
            pronm : "NCS 면역&그린프로폴리스 1박스"
        }
    ]
    return(
        <div className='container'>
        <div className={`${licom.titlebox} container d-flex flex-column justify-content-center`}>
            <span className={`${licom.ads} ms-4`}>돌고 돌아 정착한</span>
            <div className={`${licom.ads2} ms-4`}>최다 구매 프로폴리스</div>
        </div>
            <ul className='d-flex  container justify-content-center flex-wrap'>
                {sellerdb.map(function(v,i){
                    return(
                        <li className={`d-flex justify-content-center position-relative align-items-center ${v.cls} `}>
                            {
                                v.proprice != v.saleprice &&
                                <div className={`${licom.salered} position-absolute d-flex justify-content-center align-items-center ${licom.numcss}`}>{v.num}<span className={licom.numcss2}>%</span></div>
                            }
                            <img src={v.imgsrc}></img>
                            <div className='col-6'>
                                <p className={licom.smtitle}>{v.brandnm}</p>
                                <h3 className={licom.title}>{v.pronm}</h3>
                                <div className="d-flex align-items-center">
                                    <strong className={licom.propricetxt}>{v.proprice}<span className={licom.won}>원</span></strong>
                                    <span><strike className={licom.striketxt}>{v.saleprice}원</strike></span>
                                </div>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
        
    )
}

export default Licom2