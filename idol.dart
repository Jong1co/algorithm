class Idol {
  String _name;
  String group;

  Idol({
    required String name,
    required String group,
  })  : this._name = name,
        this.group = group;

  get name => _name;
}
