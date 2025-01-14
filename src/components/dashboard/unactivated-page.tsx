'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PaySubscriptionButton } from '@/lib/paystack/react'

export default function UnactivatedUserPage() {
  const [basePrice, setBasePrice] = useState(300)
  const [referralCode, setReferralCode] = useState('')
  const [finalPrice, setFinalPrice] = useState(basePrice)

  const handleReferralCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toUpperCase()
    setReferralCode(code)
    
    
  }

  return (
    <div className="container mx-auto p-6 flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Activate Your Account</CardTitle>
          <CardDescription className="text-center">
            Pay the sign-up fee to unlock all features of Gain Plus
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Account Not Activated</AlertTitle>
            <AlertDescription>
              Your account is currently inactive. Please pay the sign-up fee to access the dashboard and start earning.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2">
            <Label htmlFor="referral-code">Referral Code (Optional)</Label>
            <Input 
              id="referral-code" 
              placeholder="Enter referral code" 
              value={referralCode}
              onChange={handleReferralCodeChange}
            />
          </div>
          
          <div className="bg-primary/10 p-4 rounded-md">
            <p className="text-center text-lg font-semibold">
              Sign-up Fee: ${finalPrice.toFixed(2)}
            </p>
            {finalPrice < basePrice && (
              <p className="text-center text-sm text-green-600 mt-1">
                Discount applied!
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
         <PaySubscriptionButton amount={300} />
        </CardFooter>
      </Card>
    </div>
  )
}