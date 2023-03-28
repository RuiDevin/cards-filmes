import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const movies = [
  {
    title: 'The Godfather',
    genero: 'Crime/Drama',
    image: 'https://i.imgur.com/sGtAMyC.jpg',
  },
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    image: 'https://i.imgur.com/2O8CxEW.jpg',
  },
  {
    title: 'The Dark Knight',
    genero: 'Action/Crime/Drama',
    image: 'https://i.imgur.com/3jLPB46.jpg',
  },
  {
    title: 'Forrest Gump',
    genero: 'Drama/Comedy',
    image: 'https://i.imgur.com/9XnhWav.jpg',
  },
  {
    title: 'The Matrix',
    genero: 'Action/Sci-Fi',
    image: 'https://i.imgur.com/9MhbdYa.jpg',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Movies</Text>
      <ScrollView horizontal={true}>
        {movies.map((movie, index) => (
          <View style={styles.card} key={index}>
            <Image style={styles.image} source={{ uri: movie.image }} />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.genero}>{movie.genero}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: 200,
    height: 300,
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  genero: {
    fontSize: 16,
    fontStyle: 'italic',
    marginHorizontal: 16,
  },
});
