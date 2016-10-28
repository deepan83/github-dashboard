import { ArgumentSet, SelectionSet } from 'ember-graphql-adapter/types';

export default class Field {
  constructor(name, alias, argumentSet, selectionSet, kind) {
    this.name = name;
    this.alias = alias;
    this.kind = kind;
    this.argumentSet = argumentSet || new ArgumentSet();
    this.selectionSet = selectionSet || new SelectionSet();
  }
}
