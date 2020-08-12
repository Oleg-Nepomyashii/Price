import * as React from 'react'
import Price from './Price'

const product = {
	title: 'tea',
	price: [
		{
			weight: '500',
			money: '500'
		},
		{
			weight: '100',
			money: '150'
		},
		{
			weight: '50',
			money: '90'
		}
	]
}

const handlerSubmit = (e: React.FormEvent , product:any , currentPrice: any) => {
  		e.preventDefault()
 		const currentProduct = {...product}

 		currentProduct.price = currentProduct.price.filter((item:any) => item.money === currentPrice)

 		alert(`You choose tea : weight: ${currentProduct.price[0].weight} - price: ${currentProduct.price[0].money}`)
}


const TestApp = () => (
  	<Price 
  		product={product}
  		handlerSubmit={handlerSubmit}
  	/>
)

export default TestApp