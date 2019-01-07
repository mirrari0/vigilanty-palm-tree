import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import epilogue from 'epilogue';
import Get from 'sequelize';
import { playgame } from '../FizzBuzzCalculator';
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.SERVER_PORT || 3001;

epilogue.initialize(app);

let resource = epilogue.resource({
    model: Get,
    endpoints: ['/fizzBuzz'],
});

app.listen(port, () => {
    resource.use()
});


module.exports = {
    read : {
        action: (req,res,context) => {
            return res.;
        }
    }
}