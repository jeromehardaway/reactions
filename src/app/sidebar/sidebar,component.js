import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'asidemain photo': {
    'height': [{ 'unit': 'px', 'value': 95 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundColor': '#d9d9d9'
  },
  'asidemain banner-photo': {
    'backgroundImage': 'url(https://pbs.twimg.com/profile_banners/843496574332354560/1497099556/600x200)',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center'
  },
  'asidemain profile': {
    'backgroundColor': '#fff',
    'minHeight': [{ 'unit': 'px', 'value': 50 }]
  },
  'asidemain profile profile-photo img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 72 }],
    'float': 'right',
    'left': [{ 'unit': 'px', 'value': 25 }],
    'position': 'absolute',
    'borderRadius': '100%',
    'top': [{ 'unit': 'px', 'value': -26 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'asidemain profile col-xs-8': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'asidemain profile name': {
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'asidemain profile handle': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'color': '#657786'
  },
  'asidemain assets': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'asidemain assets assets-count': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#657786'
  },
  'asidemain assets assets-title': {
    'fontWeight': '600',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'color': '#657786',
    'display': 'block'
  },
  'asidemain assets no-left-pad': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'asidemain followers': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 16 }],
    'backgroundColor': '#fff'
  },
  'asidemain followers h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'fontWeight': '600',
    'color': '#14171a'
  },
  'asidemain followers list-inline': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'asidemain followers list-inline li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  'asidemain followers list-inline li a': {
    'display': 'block'
  },
  'asidemain followers img': {
    'borderRadius': '100%',
    'maxWidth': [{ 'unit': 'px', 'value': 45 }]
  }
});
