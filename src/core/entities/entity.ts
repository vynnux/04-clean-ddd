import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  get id(): UniqueEntityID {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID(id)
    this.props = props
  }

  public equals(entity: Entity<any>) {
    if (entity === this) return true
    if (entity.id === this.id) return true
    return false
  }
}
