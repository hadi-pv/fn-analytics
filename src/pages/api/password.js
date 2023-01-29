
export default async function handler(req, res) {
    
    const password=req.body.password

    if(password==process.env.PASSWORD){
        res.status(200).send('Correct Password')
    }else{
        res.status(500).send('Wrong Password')
    }
  }

