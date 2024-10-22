import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Layout from "../../Layout";
import { CalendarDays, Star, Edit2 } from "lucide-react";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="profile-page text-foreground">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="col-span-2 bg-primary rounded-xl">
                        <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <div className="relative">
                                    <Avatar className="w-32 h-32">
                                        <AvatarImage src="https://avatars.dicebear.com/api/male/user.svg" alt="Profile" />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <Button size="sm" className="absolute bottom-0 right-2 p-1 h-auto rounded-full bg-green-600" variant="secondary">
                                        <Edit2 />
                                    </Button>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-semibold">Ajeet Singh</h3>
                                    <p className="text-muted-foreground">Full Stack Developer</p>
                                    <Button className="mt-4 bg-green-600 hover:bg-green-800">Edit Profile</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary rounded-xl">
                        <CardHeader>
                            <CardTitle>My Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center">
                                <span className="text-4xl font-bold">80</span>
                                <Progress value={74} className="mt-2 [&>div]:bg-green-600 bg-gray-700" />
                                <p className="text-sm text-muted-foreground mt-2">2030 to next level</p>
                            </div>
                        </CardContent>  
                    </Card>
                    <Card className="col-span-2 bg-primary rounded-xl">
                        <CardHeader>
                            <CardTitle>Your Upcoming Classes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">React Fundamentals</p>
                                        <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">July 15, 2023</p>
                                </li>
                                <li className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">Advanced JavaScript</p>
                                        <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">July 17, 2023</p>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary rounded-xl">
                        <CardHeader>
                            <CardTitle>Your Points</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center">
                                <span className="text-4xl font-bold">3456</span>
                                <Button variant="link" className="mt-2 text-sm">How to earn more points?</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-3 bg-primary rounded-xl">
                        <CardHeader>
                            <CardTitle>Recent Classes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <CalendarDays className="text-muted-foreground" />
                                        <div>
                                            <p className="font-semibold">Introduction to TypeScript</p>
                                            <p className="text-sm text-muted-foreground">July 10, 2023</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="text-yellow-400 mr-1" />
                                        <span>4.8</span>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <CalendarDays className="text-muted-foreground" />
                                        <div>
                                            <p className="font-semibold">Node.js Basics</p>
                                            <p className="text-sm text-muted-foreground">July 8, 2023</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="text-yellow-400 mr-1" />
                                        <span>4.5</span>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;