import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import FlightModel from "../flights/FlightModel";

export type SeatClassEnum = 'ECONOM' | 'COMFORT' | 'BUSINESS'

@Table
export default class SeatModel extends Model {
    @AllowNull(false)
    @Column(DataType.ENUM('ECONOM', 'COMFORT', 'BUSINESS'))
    seatClass: SeatClassEnum

    @Column({ allowNull: false })
    price: number

    @Column({ allowNull: false })
    count: number

    @ForeignKey(() => FlightModel)
    @Column({ allowNull: false })
    flightId: number

    @BelongsTo(() => FlightModel)
    flight: FlightModel

    @Column({ allowNull: false })
    createdBy: number
}
