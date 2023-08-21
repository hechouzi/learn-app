import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  //   @Get()
  //   findAll(@Res() response) {
  //     response.status(200).send('This action returns all coffees');
  //   }
  @Get()
  findAll(@Query() paginationQuery) {
    console.log(paginationQuery);
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees, Limit:${limit}, Offset:${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action returns #${id} coffee`;
  }

  //   @Post()
  //   create(@Body('name') body) {
  //     return body;
  //   }

  @Post()
  //   @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this action update #${id} coffee`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `this action removes #${id} coffee`;
  }
}
