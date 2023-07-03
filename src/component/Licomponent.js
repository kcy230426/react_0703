import React from 'react'
import licom from '../scss/licom.module.css'

const Licom = () => {
    const sellerdb = [
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094359_49e885dac1d2b73c69fe3f4d7d09a546.png",
            brandnm : "뉴트리영",
            proprice : '21,900',
            saleprice : '400,000',
            num:"94",
            pronm : "풍성한 비오틴 판토텐산 1박스"
        },
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094359_ae973c86afba3e99f2922ddc99a229ee.png",
            brandnm : "파이토웨이",
            proprice : '79,000',
            saleprice : '474,000',
            num:"83",
            pronm : "판토모나 비오틴 플러스 맥스 남성용 1박스"
        },
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094359_aaf08460f5a9e29471bd6578669dbbb5.png",
            brandnm : "파이토웨이",
            proprice : '79,000',
            saleprice : '474,000',
            num:"83",
            pronm : "판토모나 비오틴 플러스맥스 여성용 1박스"
        },
        {
            cls:"col-6",
            imgsrc : "//campaign-cdn.pstatic.net/nfs/ad_collection/20230622094359_b661dccb3262c27653a94d1766db843f.png",
            brandnm : "닥터아돌",
            proprice : '38,000',
            saleprice : '38,000',
            num:"",
            pronm : "B발라민 비오틴 1통"
        }
    ]
    return(
        <div className='container'>
        <div className={`${licom.titlebox} container d-flex flex-column justify-content-center`}>
            <span className={`${licom.ads} ms-4`}>돌고 돌아 정착한</span>
            <div className={`${licom.ads2} ms-4`}>최다 구매 비오틴</div>
        </div>
            <ul className='d-flex  container justify-content-center flex-wrap mb8'>
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

export default Licom