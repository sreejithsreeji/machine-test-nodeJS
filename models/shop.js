const con=require('../dbconfig.js');

const findDistance=(loc1,loc2)=>{
    //using haversineformula
    const toRadians=(degree)=>{
        return degree*(Math.PI/180);
    }
    const R=6371;
    const lat1Rad=toRadians(loc1.lat);
    const lat2Rad=toRadians(loc2.lat);

    

    const dLat=toRadians((loc2.lat-loc1.lat));
    const dLng=toRadians((loc2.lng-loc1.lng));

    

    const a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1Rad)*Math.cos(lat2Rad)*Math.sin(dLng/2)*Math.sin(dLng/2);
    const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    const d=R*c;
    return Math.round(d*10)/10;


}

const getShop=(params)=>{
    const id=params.id;
    const sql='select lat,lng from shops where id=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[id],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows.length>0?rows[0]:{});
        })
    })
}

const distanceCalculater=async (params)=>{
    const shop1=await getShop({id:params.source});
    const shop2=await getShop({id:params.dest});

    const distance=findDistance(shop1,shop2);

    return distance+' KM';
}

//distanceCalculater(1,2);
module.exports={
    distanceCalculater
}
//console.log(Math.round(findDistance({lat:52.375603,lng:4.903206},{lat:52.366059,lng:4.926692})*10)/10);