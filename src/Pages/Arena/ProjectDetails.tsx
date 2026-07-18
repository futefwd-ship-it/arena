import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import masterPlan from '../../assets/arena_masterplan4.png';
import WithoutbgHeader from '../../components/WithoutbgHeader';
import Tooltip from '@mui/material/Tooltip';

import backgroundImage from '../../assets/gallery/exterior2.webp'


export default function ProjectDetails() {

    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            polygon: "516,1642,550,1574,569,1557,584,1546,595,1523,575,1509,617,1441,662,1467,654,1486,665,1495,651,1529,657,1534,685,1486,710,1458,730,1461,741,1450,775,1470,775,1489,761,1520,724,1577,710,1594,693,1599,702,1633,674,1704,651,1763,598,1726,592,1704,561,1692,567,1664",
            name: "ARCADIA",
            link: "/arena_arcadia",
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 2,
            polygon: "619,1306,639,1320,661,1298,687,1312,706,1281,760,1323,737,1385,783,1422,845,1295,850,1264,898,1208,952,1143,960,1112,926,1089,887,1137,845,1123,822,1146,799,1137,833,1089,808,1058,825,1039,797,1010",
            name: "CITADEL",
            link: "/arena_citatel",
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 3,
            polygon: "907,962,915,999,941,999,997,965,1008,979,983,990,1008,1013,1039,999,1017,1035,1039,1083,1127,1035,1107,1016,1132,993,1118,971,1144,973,1180,965,1262,920,1220,875,1189,897,1158,906,1146,889,1186,866,1172,846,1192,821,1217,782,1180,745,1070,832,1079,855,1073,872,1056,897,1036,878,1011,889,991,894",
            name: "PAVILION",
            // name:"FUTURE DEVELOPMENT",
            //  link: "",
            link: "/arena_pavilion",
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 4,
            polygon: "1238,714,1260,694,1283,683,1325,666,1336,680,1350,669,1362,680,1387,669,1407,646,1446,610,1497,595,1508,641,1483,669,1443,691,1452,708,1494,680,1514,717,1542,767,1472,810,1339,869,1308,796,1322,784,1294,782,1277,759,1308,745,1294,734,1260,751",
            name: "FUTURE DEVELOPMENT",
            link: "/arena_stadia",
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 5,
            polygon: "1544,578,1561,612,1587,640,1663,615,1649,634,1623,663,1637,711,1714,696,1702,674,1722,663,1750,654,1779,654,1812,651,1846,634,1846,595,1826,530,1858,522,1835,471,1793,477,1745,499,1711,519,1711,536,1680,536,1660,539,1652,513,1606,533,1609,550",
            name: "ATHELETICA",
            link: "/arena_atheletica",
            //    link: "",
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 6,
            polygon: "1525,1343,1581,1340,1629,1351,1643,1337,1612,1323,1612,1275,1668,1272,1657,1249,1705,1255,1711,1278,1764,1275,1756,1323,1731,1337,1745,1348,1849,1337,1860,1362,1855,1388,1832,1393,1835,1410,1858,1413,1841,1444,1728,1441,1739,1464,1756,1464,1759,1523,1615,1515,1612,1456,1621,1434,1530,1448,1519,1414,1542,1405,1544,1386,1516,1380",
            name: "GREENFIELD",
            link: "/arena_greenfield",
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 7,
            polygon: "1920,1343,1976,1340,2024,1351,2038,1337,2007,1323,1999,1267,2063,1272,2052,1249,2100,1255,2111,1267,2159,1275,2151,1323,2126,1337,2140,1348,2244,1337,2255,1362,2250,1388,2227,1393,2230,1410,2253,1413,2236,1444,2123,1441,2134,1464,2151,1464,2154,1523,2010,1515,2007,1456,2016,1434,1925,1448,1914,1414,1937,1405,1939,1386,1911,1380",
            name: "GRANDSTAND",
             link: "/arena_grandstand",
            //  name: "FUTURE DEVELOPMENT",
            //  link: "",
            //
            hoverColor: "rgba(255,112,67,0.4)",
        },
        {
            id: 8,
            polygon: "2310,1338,2366,1335,2414,1346,2428,1332,2397,1318,2389,1262,2453,1267,2442,1244,2490,1250,2501,1262,2549,1270,2541,1318,2516,1332,2530,1343,2634,1332,2645,1357,2640,1383,2617,1388,2620,1405,2643,1408,2626,1439,2513,1436,2524,1459,2557,1462,2554,1518,2400,1510,2397,1451,2406,1429,2315,1443,2304,1409,2327,1400,2329,1381,2301,1375",
            name: "FUTURE DEVELOPMENT",
            link: "",
            hoverColor: "rgba(255,112,67,0.4)",
        }
    ]

    const [selectedFloor, setSelectedFloor] = useState<Number | null>(null);
    const [hoveredFloor, setHoveredFloor] = useState<Number | null>(null);

    return (<>
        <div
            className="flex flex-col md:flex-row w-full  h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }} // your image here
        >
            <div className='  bg-[rgba(151,156,164,0.9)] absolute w-full h-full'></div>
            {/* Header */}
            <WithoutbgHeader />

            {/* Left Side Panel */}
            <div className="md:w-1/5 hidden  w-full p-5 left-2 md:left-16 lg:flex flex-col justify-center bg-black/10 absolute top-1/4 backdrop-blur-sm rounded-lg m-4">
                <button className="font-bold  bg-gradient-to-r mb-4 rounded-sm px-6 md:px-16 py-2 text-white from-[#e6a524] to-[#696a68] w-full md:w-auto">
                    THE ARENA
                </button>

                <ul className="list-disc pl-6 text-white leading-7 mt-2">
                    <li>10.19 acres land parcel</li>
                    <li>80% open spaces</li>
                    <li>5.3 acres sports themed landscaping</li>
                    <li>80+ exclusive active-life amenities</li>
                    <li>2, 3 & 4 BHK Luxe homes</li>
                </ul>
            </div>

            {/* Master Plan SVG */}
            <div className="md:flex-1 absolute w-full lg:w-[65%] left-0 lg:left-1/4 inset-0  flex justify-center items-center">
                <svg
                    viewBox="0 0 3194 2250"
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Image */}
                    <image href={masterPlan} x="0" y="0" width="3194" height="2250" />

                    {/* Polygons */}
                    {data.map((e) => (
                        <Tooltip
                            key={e.id}
                            title={e.name}
                            placement="top"
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        backgroundColor: '#e6a524',
                                        color: 'white',
                                        fontSize: '14px',
                                        padding: '6px 10px',
                                        borderRadius: '4px',
                                    },
                                },
                            }}
                        >
                            <polygon
                                points={e.polygon}
                                fill={
                                    selectedFloor === e.id
                                        ? 'rgba(255,112,67,0.5)'
                                        : hoveredFloor === e.id
                                            ? e.hoverColor
                                            : 'transparent'
                                }
                                // stroke="orange"
                                // strokeWidth={2}
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => setHoveredFloor(e.id)}
                                onMouseLeave={() => setHoveredFloor(null)}
                                onClick={() => {
                                    setSelectedFloor(e.id);
                                    navigate(e.link);
                                }}
                            />
                        </Tooltip>
                    ))}
                </svg>
            </div>

            {/* <Navbar /> */}
        </div>

    </>);
}
