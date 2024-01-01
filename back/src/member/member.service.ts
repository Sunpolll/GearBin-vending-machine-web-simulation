import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/member.dto';

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member) private readonly repository: Repository<Member>,
    ) { }

    async getpoint(tel: string):Promise<number> {
        console.log(tel);
        
        const member = await this.repository.findOne({
            where: {
                tel: tel
            }
        })
        return member.point;
    }

    async addpoint(data: CreateMemberDto): Promise<number> {
        const member = await this.repository.findOne({
            where: {
                tel: data.tel
            }
        })
        if (member) {
            console.log(typeof(member.point),typeof(data.point));
           
            
            member.point +=  data.point;
            this.repository.save(member);
            return member.point;
        }

        this.repository.create(data);
        this.repository.save(data);
        return data.point;


    }
}
