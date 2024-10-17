'use client'

import { useState } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

// This is a simplified example. In a real-world scenario, you'd have a more complex smart contract
const authContractABI = [
  "function registerUser(string memory _name, string memory _email) public",
  "function verifyUser(address _userAddress) public view returns (bool)",
]
const authContractAddress = "0x1234567890123456789012345678901234567890" // Replace with your actual contract address

export default function BlockchainAuth() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(authContractAddress, authContractABI, signer)
        return { signer, contract }
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      console.error("Metamask is not installed")
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { contract } = await connectWallet()
      const tx = await contract.registerUser(name, email)
      await tx.wait()
      setIsVerified(true)
    } catch (error) {
      console.error("Registration failed:", error)
    }
    setIsLoading(false)
  }

  const handleVerify = async () => {
    setIsLoading(true)
    try {
      const { signer, contract } = await connectWallet()
      const address = await signer.getAddress()
      const verified = await contract.verifyUser(address)
      setIsVerified(verified)
    } catch (error) {
      console.error("Verification failed:", error)
    }
    setIsLoading(false)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Blockchain Authentication</CardTitle>
        <CardDescription>Verify your identity using blockchain</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button onClick={handleRegister} disabled={isLoading}>
          {isLoading ? "Processing..." : "Register"}
        </Button>
        <Button onClick={handleVerify} variant="outline" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify Identity"}
        </Button>
        {isVerified && <p className="text-green-500">Your identity is verified!</p>}
      </CardFooter>
    </Card>
  )
}