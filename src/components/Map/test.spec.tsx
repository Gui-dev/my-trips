import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]}/>)

    expect(screen.getByRole('link', {
      name: /a js library for interactive maps/i
    })).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '1',
      name: 'Rio',
      slug: 'rio',
      location: {
        latitude: 1,
        longitude: 1
      }
    }

    render(<Map places={[place, placeTwo]}/>)

    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument()
    expect(screen.getByTitle(/rio/i)).toBeInTheDocument()
  })
})
