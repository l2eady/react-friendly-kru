
import { ToDateTHFormat } from "../../utils/date"

const ShowStarAndTotalReviewer = (lvl, totalReviewer) => {
    var arr = calculateStar(lvl)

    if (totalReviewer == undefined) {
        totalReviewer = 0
    }
    arr.push(<p>({totalReviewer} รีวิว)</p>
    )
    return arr
}
// calculateStar will calculate yellow star, and grey star by level
const calculateStar = (lvl) => {
    // Maximum star is 5
    const MaxStartLvl = 5
    var yellowStar = 0
    var greyStar = 0
    // In case, lvl is not define, or no level star, we will assume it as 5 stars
    if (lvl == undefined || lvl <= 0) {
        yellowStar = MaxStartLvl
        greyStar = 0
    } else {
        yellowStar = lvl
        greyStar = MaxStartLvl - lvl
    }
    var i
    var arr = []
    for (i = 1; i <= yellowStar; i++) {
        arr.push(
            <svg key={'yellow_' + i} className="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
        )
    }
    for (i = 1; i <= greyStar; i++) {
        arr.push(<svg key={'grey_' + i} className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>)
    }

    return arr

}

const ShowComments = (commmentsInfo) => {
    var arr = []
    if (commmentsInfo == undefined || commmentsInfo.length == 0) {
        arr.push(
            <div>
                <p className="flex items-baseline">
                    <span className="text-gray-600 font-bold">No Reviewer</span>
                </p>
                <div className="flex items-center mt-1">
                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                </div>
                <div className="mt-3">
                    <p className="mt-1">Waiting for review</p>
                </div>
            </div>
        )
    } else {
        var i
        for (i = 0; i < commmentsInfo.length; i++) {
            arr.push(
                <div key={"comment" + i} className="mb-6">
                    <p className="flex items-baseline">
                        <span className="text-gray-600 font-bold">{commmentsInfo[i]?.name} ณ {ToDateTHFormat(commmentsInfo[i]?.reviewedAt)}</span>
                    </p>
                    <div className="flex items-center mt-1">
                        {calculateStar(commmentsInfo[i]?.totalStar)}
                    </div>
                    <div className="mt-3">
                        <p className="mt-1">{commmentsInfo[i]?.comment}</p>
                    </div>
                    <div></div>
                </div>
            )
        }
    }

    return (
        <div className="ml-6">
            {arr}
        </div>

    )
}

export { ShowComments }

export default ShowStarAndTotalReviewer