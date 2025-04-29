import {useEffect, useMemo} from 'react'

const Test = ({number}: {number:number}) => {
    const expensiveCalculate = useMemo(() => {
        console.log('Считаем...');
        return number * 2
    }, [number]) 
  return (
    <div>
        Результат {expensiveCalculate}
    </div>
  )
}

export default Test