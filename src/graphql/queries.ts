import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      title
      slug
      content {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPagesBySlug($slug:String!) {
    page(where:{ slug:$slug }) {
      id
      title
      slug
      content {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      name
      slug
      location {
        latitude
        longitude
      }
      description{
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
