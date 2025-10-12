// 背景効果
export const Background = () => {
    // 6つの円のデータ
    const circles = [
        {
            color: "#e7336e",
            delay: "0s",
            duration: "6s",
            left: "10vw",
            top: "40vh",
        }, // M
        {
            color: "#66bf97",
            delay: "1s",
            duration: "7s",
            left: "25vw",
            top: "70vh",
        }, // i
        {
            color: "#856daf",
            delay: "2s",
            duration: "5s",
            left: "40vw",
            top: "50vh",
        }, // a
        {
            color: "#ffe450",
            delay: "3s",
            duration: "8s",
            left: "55vw",
            top: "80vh",
        }, // k
        {
            color: "#6bc8f2",
            delay: "4s",
            duration: "6s",
            left: "70vw",
            top: "30vh",
        }, // k
        {
            color: "#f8b217",
            delay: "5s",
            duration: "7s",
            left: "85vw",
            top: "60vh",
        }, // s
    ];

    return (
        <div className="absolute inset-0 -z-10">
            {/* 点灯する背景グラデーション */}
            <div className="absolute top-0 left-0 h-full w-full">
                {circles.map((circle, index) => (
                    <div
                        key={index}
                        className="absolute h-64 w-64 animate-pulse rounded-full opacity-5 mix-blend-screen blur-3xl"
                        style={{
                            backgroundColor: circle.color,
                            animationDelay: circle.delay,
                            animationDuration: circle.duration,
                            left: circle.left,
                            top: circle.top,
                            transform: `translate(-50%, -50%)`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
