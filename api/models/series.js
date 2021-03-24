const db = require ('../db_config')

class Series {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.year_released = data.year_released
        this.imbd_rating = data.imbd_rating
        this.number_of_episodes = data.number_of_episodes
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const seriesData = await db.query(`SELECT * FROM series;`)
                console.log(seriesData);
                const series = seriesData.rows.map(s => new Series(s))
                resolve(series);
            } catch (err) {
                reject("Error retrieving series, no TV for you!")
            }
        })
    }
}

module.exports = Series;
