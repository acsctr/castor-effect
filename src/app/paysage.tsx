export default function Paysage() {
    return (
        <div id="box">
            <div className="river river--1"></div>
            <div className="river river--2"></div>

            <svg>
                <filter id="turbulence" x="0" y="0">
                    <feTurbulence baseFrequency="0.02 0.01"></feTurbulence>
                    <feDisplacementMap scale="45" in="SourceGraphic"></feDisplacementMap>
                </filter>
            </svg>
        </div>


    );
}