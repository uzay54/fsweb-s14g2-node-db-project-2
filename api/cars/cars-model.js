
const db=require("../../data/db-config");

const getAll = () => {
  // HOKUS POKUS
return db("cars");
}

const getById = (id) => {
  
  return db("cars").where("id",id).first();
  // HOKUS POKUS
}

const create = async (car) => {
  // HOKUS POKUS
 const [id]= await db("cars").insert(car);
return getById(id);
}

module.exports={getById,getAll,create};