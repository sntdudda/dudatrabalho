import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function ProductFilters() {
  const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty"]

  const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm font-normal">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider defaultValue={[0, 1000]} max={1000} step={10} className="w-full" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$1000+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <Label htmlFor={brand} className="text-sm font-normal">
                {brand}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full bg-transparent" variant="outline">
        Clear Filters
      </Button>
    </div>
  )
}
