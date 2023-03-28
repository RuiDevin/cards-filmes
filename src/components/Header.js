import { Text, View, StyleSheet } from 'react-native';
import './Capa.css'
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>RuiBank</Text>
    </View>
  );
}

function Header(props) {
    return (
      <div class="movie-card-header">
        <h2 class="movie-title">{props.title}</h2>
        <p class="movie-rating">{props.rating}</p>
      </div>
    );
  }
  
  
