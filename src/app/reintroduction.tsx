'use client'

import { useState, useEffect, useCallback } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Sector } from 'recharts';

const COLORS = ['#17e2a3', '#9abef4', '#c4a672'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderActiveShape = (props: { cx?: any; cy?: any; innerRadius?: any; outerRadius?: any; startAngle?: any; endAngle?: any; fill?: any; }) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

export default function Reintroduction() {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = useCallback(
    (_:any, index:any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

let donnees = [
  { resultat_de_la_reintroduction: 'Succès', nombre_de_castors: 241 },
  { resultat_de_la_reintroduction: 'Échec', nombre_de_castors: 28 },
  { resultat_de_la_reintroduction: 'Résultat inconnu', nombre_de_castors: 7 },
]

  useEffect(() => {
    
        setData(donnees)
        setIsLoading(false)

  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
            data={data}
            dataKey="nombre_de_castors"
            nameKey="resultat_de_la_reintroduction"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            layout="horizontal"
            iconSize ={22}
            iconType="triangle"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
