import React from 'react'
import {Card , CardHeader , CardContent , Typography } from '@material-ui/core';
 import { Doughnut } from 'react-chartjs-2';

import  useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({title, subheader}) => {
    // We use useStyle hook for importing material-ui class
     const {total, chartData} =useTransactions(title);
    const classes =useStyles();
  

    return (
        // In th below statement for our income use income css class else expense
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} subheader ={subheader}/>
                <CardContent>
                   <Typography varinat="h5">Rs.{total}</Typography>
                   {/* We will be adding data later */}
                   {/* console.log(chartData) */}
                   <Doughnut data={chartData} /> 
                </CardContent>
        </Card>
    );
}

export default Details;
