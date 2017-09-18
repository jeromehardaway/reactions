import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'create-status': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#fcfcfc',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f0f0f0' }]
  },
  'create-status form form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'create-status form countdown': {
    'color': '#657786',
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'create-status form textarea': {
    'borderRadius': '15px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'borderColor': '#f0f0f0',
    'resize': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'create-status form textarea:focus': {
    'borderColor': '#00baba'
  },
  'create-status form button': {
    'borderRadius': '15px',
    'backgroundColor': '#00baba',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'minWidth': [{ 'unit': 'px', 'value': 80 }]
  },
  'create-status form button:focus': {
    'backgroundColor': '#00a1a1'
  },
  'create-status form button:hover': {
    'backgroundColor': '#00a1a1'
  },
  'create-status form button:focus[disabled]': {
    'backgroundColor': '#00baba'
  },
  'create-status form button:hover[disabled]': {
    'backgroundColor': '#00baba'
  },
  'list-statuses': {
    'backgroundColor': '#fff'
  },
  'list-statuses ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'list-statuses ul li': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f0f0f0' }]
  },
  'list-statuses ul li:last-child': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'list-statuses photo': {
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'list-statuses photo img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '100%'
  },
  'list-statuses status': {
    'overflow': 'hidden',
    'color': '#474747'
  },
  'list-statuses status p:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'list-statuses status ul': {
    'listStyle': 'none',
    'float': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'list-statuses status ul li': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'list-statuses counts': {
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'list-statuses counts reaction': {
    'display': 'inline-block',
    'fontWeight': '600',
    'color': '#140044',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'list-statuses counts reaction[hidden]': {
    'display': 'none'
  }
});
